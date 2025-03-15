import express from 'express';
import { registrar, login } from '../controllers/authController.js';

const router = express.Router();

// Rota de registro de usuário
router.post('/registro', registrar);

// Rota de login de usuário
router.post('/login', login);

export { router };
