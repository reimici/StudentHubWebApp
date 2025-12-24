import { pool } from '../config/db';
import { RowDataPacket } from 'mysql2';

export const userService = {
    async getLeaderboard(userId: number) {
        // Classifica globale
        const [leaderboard] = await pool.query<RowDataPacket[]>(`
            SELECT id, nome, xp_totali 
            FROM utenti 
            WHERE ruolo = "0" 
            ORDER BY xp_totali DESC 
            LIMIT 50
        `);

        // Calcolo posizione utente loggato
        const [rankResult] = await pool.query<RowDataPacket[]>(`
            SELECT COUNT(*) + 1 as \`rank\` 
            FROM utenti 
            WHERE xp_totali > (SELECT xp_totali FROM utenti WHERE id = ?) AND ruolo = "0"
        `, [userId]);

        const myRank = rankResult[0].rank;

        return {
            leaderboard,
            myRank
        };
    }
};
