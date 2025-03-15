import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
