import { Request, Response } from 'express';
import { pool } from '../config/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// GET: Ottieni esami con Filtri e Ordinamento
export const getExams = async (req: Request, res: Response) => {
    try {
        if (!req.user) return res.status(401).json({ message: 'Utente non autenticato' });

        // 1. Estraiamo i parametri dalla query string
        const { sortBy, order, year } = req.query;

        // 2. Whitelist per sicurezza (evita SQL Injection sui nomi colonna)
        const validSortFields = ['data', 'voto', 'cfu', 'nome'];
        const validOrderDirs = ['ASC', 'DESC'];

        // 3. Impostiamo i default se i parametri mancano o sono errati
        // Default: Ordina per data, Decrescente (dal più recente)
        const sortField = validSortFields.includes(sortBy as string) ? sortBy : 'data';
        const orderDir = validOrderDirs.includes((order as string)?.toUpperCase()) ? (order as string).toUpperCase() : 'DESC';

        // 4. Costruzione Query Dinamica
        let query = 'SELECT * FROM esami WHERE id_utente = ?';
        const queryParams: any[] = [req.user.id];

        // Se c'è un anno specifico (e non è "all"), aggiungiamo il filtro
        if (year && year !== 'all') {
            query += ' AND YEAR(data) = ?';
            queryParams.push(year);
        }

        // Aggiungiamo l'ordinamento alla fine
        query += ` ORDER BY ${sortField} ${orderDir}`;

        const [exams] = await pool.query(query, queryParams);
        res.json(exams);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Errore nel recupero esami' });
    }
};

// POST: Aggiungi esame
export const addExam = async (req: Request, res: Response) => {
    const connection = await pool.getConnection();
    try {
        if (!req.user) return res.status(401).json({ message: 'Utente non autenticato' });

        const { nome, voto, lode, cfu, data } = req.body;
        
        let xp = voto * cfu;
        if (lode) xp += 50;

        await connection.beginTransaction();

        const [result] = await connection.query<ResultSetHeader>(
            'INSERT INTO esami (id_utente, nome, voto, lode, cfu, data, xp_guadagnati) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [req.user.id, nome, voto, lode || false, cfu, data, xp]
        );

        await connection.query(
            'UPDATE utenti SET xp_totali = xp_totali + ? WHERE id = ?',
            [xp, req.user.id]
        );

        await connection.commit();

        res.status(201).json({ 
            message: 'Esame aggiunto con successo!', 
            id: result.insertId,
            xp_guadagnati: xp 
        });

    } catch (error) {
        await connection.rollback();
        console.error(error);
        res.status(500).json({ message: 'Errore aggiunta esame' });
    } finally {
        connection.release();
    }
};

// DELETE: Rimuovi esame
export const deleteExam = async (req: Request, res: Response) => {
    const connection = await pool.getConnection();
    try {
        if (!req.user) return res.status(401).json({ message: 'Utente non autenticato' });

        const { id } = req.params;

        const [exam] = await connection.query<RowDataPacket[]>('SELECT xp_guadagnati FROM esami WHERE id = ? AND id_utente = ?', [id, req.user.id]);
        
        if (exam.length === 0) {
            return res.status(404).json({ message: 'Esame non trovato o non autorizzato' });
        }

        const xpDaRimuovere = exam[0].xp_guadagnati;

        await connection.beginTransaction();

        await connection.query('DELETE FROM esami WHERE id = ?', [id]);

        await connection.query(
            'UPDATE utenti SET xp_totali = xp_totali - ? WHERE id = ?',
            [xpDaRimuovere, req.user.id]
        );

        await connection.commit();
        res.json({ message: 'Esame eliminato, XP ricalcolati' });

    } catch (error) {
        await connection.rollback();
        console.error(error);
        res.status(500).json({ message: 'Errore eliminazione' });
    } finally {
        connection.release();
    }
};