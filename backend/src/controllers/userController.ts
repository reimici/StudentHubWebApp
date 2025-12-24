import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const getLeaderboard = async (req: Request, res: Response) => {
    try {
        if (!req.user) return res.status(401).json({ message: 'Non autenticato' });

        const result = await userService.getLeaderboard(req.user.id);
        res.json(result);

    } catch (error) {
        console.error('Errore recupero classifica:', error);
        res.status(500).json({ message: 'Errore recupero classifica' });
    }
};