import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
import { router  as reservaRoutes } from './routes/reservas.js';
import { router as salaRoutes } from './routes/salas.js';
import { connectDB } from './config/database.js';



const app = express()
const port = process.env.PORT || 3000


app.use(express.json())// Para suportar json

connectDB() // chamando a conexao com o bd

app.use('/api', reservaRoutes);  // Rotas de reservas
app.use('/api', salaRoutes);     // Rotas de salas


app.listen(port, ()=>{
    console.log(`servidor rodando em ${port}`)
})