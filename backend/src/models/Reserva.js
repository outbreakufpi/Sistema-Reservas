import mongoose from 'mongoose';

const ReservaSchema = new mongoose.Schema({
  matricula: { type: String, required: true }, // Identificação do estudante
  sala: { type: mongoose.Schema.Types.ObjectId, ref: "Sala", required: true }, // Sala reservada
  data: { type: Date, required: true }, // Data da reserva
  horarioInicio: { type: String, required: true }, // Horário de início da reserva
  horarioFim: { type: String, required: true }, // Horário de término da reserva
  status: {
    type: String,
    enum: ["pendente", "confirmada", "cancelada"],
    default: "pendente",
  }, // Status da reserva
});

export default mongoose.model('Reserva', ReservaSchema);