import express from 'express';
import * as authController from '../controllers/authController';

import { protect } from '../middleware/protect';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', protect, authController.getMe);

export default router;