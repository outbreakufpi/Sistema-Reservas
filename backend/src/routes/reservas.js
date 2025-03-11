import express from 'express';
import { criarReserva, listarReservas } from '../controllers/reservaController.js';

const router = express.Router();

router.post('/reservas', criarReserva);
router.get('/reservas', listarReservas);

export { router };
