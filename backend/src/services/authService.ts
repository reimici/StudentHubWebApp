import { pool } from '../config/db';
import bcrypt from 'bcrypt';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export const authService = {
    // Registra un nuovo utente
    async register(userData: any) {
        const { nome, cognome, email, password } = userData;

        // 1. Verifica se l'email esiste
        const [existingUsers] = await pool.query<RowDataPacket[]>(`
            SELECT * 
            FROM utenti 
            WHERE email = ?
        `, [email]);

        if (existingUsers.length > 0) {
            throw new Error('Email già registrata'); // O custom error
        }

        // 2. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Inserimento nel DB
        const [result] = await pool.query<ResultSetHeader>(`
            INSERT INTO utenti (nome, cognome, email, password) 
            VALUES (?, ?, ?, ?)
        `, [nome, cognome, email, hashedPassword]);

        // 4. Costruisce oggetto utente da restituire
        const user = {
            id: result.insertId,
            nome,
            cognome,
            email,
            ruolo: '0', // Default studente
            xp_totali: 0
        };

        return user;
    },

    // Login utente
    async login(loginData: any) {
        const { email, password } = loginData;

        // 1. Cerca utente
        const [users] = await pool.query<RowDataPacket[]>(`
            SELECT * 
            FROM utenti 
            WHERE email = ?
        `, [email]);
        const user = users[0];

        // 2. Verifica password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Credenziali non valide');
        }

        // 3. Restituisce utente (senza password, idealmente, ma qui serve al controller/jwt)
        // Per sicurezza evitiamo di ritornare l'hash password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
};
