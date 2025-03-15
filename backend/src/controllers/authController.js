import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

// Função para registro de usuário
export const registrar = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Usuário já existe' });
    }

    const usuario = new Usuario({ nome, email, senha: bcrypt.hashSync(senha, 10) });
    await usuario.save();
    res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao registrar usuário', erro: err.message });
  }
};

// Função para login de usuário
export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: usuario._id, isAdmin: usuario.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ mensagem: 'Login bem-sucedido', token });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao fazer login', erro: err.message });
  }
};
