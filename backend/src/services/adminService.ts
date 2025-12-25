import { pool } from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { UserRole } from '../types/enums';
import bcrypt from 'bcrypt';

export const adminService = {
    // Lista utenti
    async getAllUsers() {
        const query = `
            SELECT id, nome, cognome, ruolo, xp_totali, created_at 
            FROM utenti 
            ORDER BY created_at DESC
        `;
        const [users] = await pool.query<RowDataPacket[]>(query);
        return users;
    },

    // Statistiche amministrative
    async getAdminStats() {
        const query = `
            SELECT COUNT(e.id) AS total_exams 
            FROM esami e
            JOIN utenti u ON e.id_utente = u.id
            WHERE u.ruolo = '0'
        `;
        const [result] = await pool.query<RowDataPacket[]>(query);
        return {
            message: 'Statistiche amministrative',
            exams_by_standard_users: result[0].total_exams
        };
    },

    // Classifica globale
    async getGlobalRanking() {
        const query = `
            SELECT nome, xp_totali
            FROM utenti
            ORDER BY xp_totali DESC
            LIMIT 100
        `;
        const [users] = await pool.query<RowDataPacket[]>(query);
        return users.map((user, index) => ({
            ...user,
            rank: index + 1
        }));
    },

    // Aggiorna ruolo
    async updateUserRole(targetUserId: number, newRole: string, currentUserId: number) {
        // Usa l'Enum per validare i ruoli
        const validRoles = Object.values(UserRole) as string[];
        if (!validRoles.includes(newRole)) {
            throw new Error(`Ruolo non valido. Ruoli permessi: ${validRoles.join(', ')}`);
        }

        // Impedisce al SuperAdmin di declassarsi da solo per errore
        if (targetUserId === currentUserId && newRole !== UserRole.SUPER_ADMIN) {
             throw new Error('Non puoi rimuovere il tuo stesso ruolo di SuperAdmin.');
        }

        const query = 'UPDATE utenti SET ruolo = ? WHERE id = ?';
        const [result] = await pool.query<ResultSetHeader>(query, [newRole, targetUserId]);

        if (result.affectedRows === 0) {
            throw new Error('Utente non trovato');
        }

        return { userId: targetUserId, newRole };
    },

    // Elimina account Admin
    async deleteAdminAccount(targetUserId: number, currentUserId: number) {
        // Verifica ruolo utente target
        const [users] = await pool.query<RowDataPacket[]>('SELECT ruolo FROM utenti WHERE id = ?', [targetUserId]);
        
        if (users.length === 0) {
            throw new Error('Utente non trovato.');
        }

        const roleToDelete = users[0].ruolo;

        // Controlli di sicurezza
        if (roleToDelete !== UserRole.ADMIN) {
            throw new Error('Questa azione è permessa solo per eliminare account Admin (ruolo 1).');
        }
        
        if (targetUserId === currentUserId) {
            throw new Error('Non puoi eliminare il tuo stesso account.');
        }

        await pool.query('DELETE FROM utenti WHERE id = ?', [targetUserId]);
    },

    // Registra Admin
    async registerAdmin(adminData: any) {
        const { nome, cognome, email, password } = adminData;

        const [existing] = await pool.query<RowDataPacket[]>('SELECT id FROM utenti WHERE email = ?', [email]);
        if (existing.length > 0) {
            throw new Error('Email già registrata.');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const insertQuery = `
            INSERT INTO utenti (nome, cognome, email, password, ruolo) 
            VALUES (?, ?, ?, ?, '${UserRole.ADMIN}')
        `;
        const [result] = await pool.query<ResultSetHeader>(insertQuery, [nome, cognome, email, hashedPassword]);
        
        return { id: result.insertId, email };
    }
};
