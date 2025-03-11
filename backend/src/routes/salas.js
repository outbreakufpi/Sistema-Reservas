import express from "express";
import { criarSala, listarSalas } from "../controllers/salaController.js";

const router = express.Router();

router.post("/salas", criarSala);

router.get("/salas", listarSalas);

export { router };
