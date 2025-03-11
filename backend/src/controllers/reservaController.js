import Reserva from "../models/Reserva.js";
import Sala from "../models/Sala.js";

export const criarReserva = async (req, res) => {
  try {
    const { matricula, sala, data, horarioInicio, horarioFim } = req.body;
    const salaExistente = await Sala.findById(sala);
    if (!salaExistente) {
      return res.status(404).json({ message: "Sala não encontrada" });
    }

    const novaReserva = new Reserva({
      matricula,
      sala,
      data,
      horarioInicio,
      horarioFim,
    });

    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Erro ao criar a reserva", error: err.message });
  }
};

export const listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate("sala", "nome").exec();
    res.status(200).json(reservas);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erro ao listar reservas", error: err.message });
  }
};
