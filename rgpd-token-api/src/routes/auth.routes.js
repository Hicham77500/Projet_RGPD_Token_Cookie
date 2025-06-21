import express from 'express';
import { login, getProtected } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/login', login);
router.get('/protected', verifyToken, getProtected);

export default router;