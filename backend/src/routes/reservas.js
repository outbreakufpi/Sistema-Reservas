import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';
import { reservarSala, listarReservas } from '../controllers/reservaController.js'; // Importação dos controladores

const router = express.Router();

// Rota protegida que exige um token válido
router.post('/reservar', verificarToken, reservarSala);
router.get('/reservas', verificarToken, listarReservas);

export { router };