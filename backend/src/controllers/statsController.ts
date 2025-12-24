import { Request, Response } from 'express';
import { statsService } from '../services/statsService';

export const getStats = async (req: Request, res: Response) => {
    try {
        if (!req.user) return res.status(401).json({ message: 'Non autenticato' });

        const stats = await statsService.calculateStats(req.user.id);
        res.json(stats);

    } catch (error) {
        console.error('Errore calcolo stats:', error);
        res.status(500).json({ message: 'Errore del server' });
    }
};