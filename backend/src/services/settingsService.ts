import { pool } from '../config/db';
import { RowDataPacket } from 'mysql2';

export const settingsService = {
    async getSettings(userId: number) {
        const [settings] = await pool.query<RowDataPacket[]>(`
            SELECT tema_voti, rgb_soglia_bassa, rgb_soglia_alta 
            FROM impostazioni_utente 
            WHERE id_utente = ?
        `, [userId]);

        if (settings.length === 0) {
            throw new Error('Impostazioni non trovate');
        }
        return settings[0];
    },

    async updateSettings(userId: number, settingsData: any) {
        const { tema_voti, rgb_soglia_bassa, rgb_soglia_alta } = settingsData;

        if (!tema_voti) {
            throw new Error('Il tema è obbligatorio');
        }

        if (tema_voti === 'RGB') {
            if (rgb_soglia_bassa > rgb_soglia_alta) {
                throw new Error('La soglia bassa non può essere maggiore di quella alta');
            }
            if (rgb_soglia_bassa < 18 || rgb_soglia_alta > 30) {
                throw new Error('Le soglie devono essere tra 18 e 30');
            }
        }

        await pool.query(`
            UPDATE impostazioni_utente 
            SET tema_voti = ?, rgb_soglia_bassa = ?, rgb_soglia_alta = ? 
            WHERE id_utente = ?
        `, [tema_voti, rgb_soglia_bassa, rgb_soglia_alta, userId]);

        return { tema_voti, rgb_soglia_bassa, rgb_soglia_alta };
    }
};
