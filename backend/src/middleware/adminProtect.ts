import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../types/enums';

// --- Middleware per Admin: accesso ruolo '1' (Admin) o '2' (SuperAdmin) ---
export const protectAdmin = (req: Request, res: Response, next: NextFunction): void => {
    // req.user è già tipizzato grazie a src/types/express.d.ts
    if (req.user && (req.user.ruolo === UserRole.ADMIN || req.user.ruolo === UserRole.SUPER_ADMIN)) {
        next();
    } else {
        res.status(403).json({ message: 'Accesso negato: Richiesti privilegi di Amministratore.' });
    }
};

// --- Middleware per SuperAdmin: accesso SOLO ruolo '2' (SuperAdmin) ---
export const protectSuperAdmin = (req: Request, res: Response, next: NextFunction): void => {
    if (req.user && req.user.ruolo === UserRole.SUPER_ADMIN) {
        next();
    } else {
        res.status(403).json({ message: 'Accesso negato: Richiesti privilegi di Super Amministratore.' });
    }
};