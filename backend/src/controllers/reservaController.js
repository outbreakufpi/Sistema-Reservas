import Reserva from '../models/Reserva.js';

export const reservarSala = async (req, res) => {
  try {
    const { matricula, sala, data, horarioInicio, horarioFim } = req.body;
    const novaReserva = new Reserva({
      matricula,
      sala,
      data,
      horarioInicio,
      horarioFim,
      status: 'pendente',
    });
    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao reservar a sala', error });
  }
};

export const listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate('sala');
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar as reservas', error });
  }
};
