import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../types/enums';

export const superAdminProtect = (req: Request, res: Response, next: NextFunction) => {
    // req.user viene popolato dal middleware 'protect'
    // Ruolo '2' = SuperAdmin
    if (req.user && req.user.ruolo === UserRole.SUPER_ADMIN) {
        next();
    } else {
        res.status(403).json({ message: 'Azione riservata al Super Amministratore' });
    }
};