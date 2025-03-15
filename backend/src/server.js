import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { router as reservasRouter } from "./routes/reservas.js"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Para aceitar JSON no corpo das requisições

// Criar __dirname manualmente para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurando EJS como mecanismo de visualização
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

// Conectar ao banco de dados MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB", err));

// Usando as rotas existentes
app.use("/api", reservasRouter);

// Adicionando as rotas para Home, Login e Admin
app.get("/", (req, res) => {
  res.render("home"); // Renderiza home.ejs
});

app.get("/login", (req, res) => {
  res.render("login"); // Renderiza login.ejs
});
app.get("/admin", (req, res) => {
  res.render("admin"); // Renderiza admin.ejs
});
app.get("/reservas", (req, res) => {
  res.render("reservas"); // Renderiza reservas.ejs
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
