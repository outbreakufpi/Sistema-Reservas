import Sala from "../models/Sala.js";

export const criarSala = async (req, res) => {
  try {
    const { nome, capacidade } = req.body;

    const novaSala = new Sala({
      nome,
      capacidade,
    });

    await novaSala.save();
    res.status(201).json(novaSala);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Erro ao criar a sala", error: err.message });
  }
};

export const listarSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.status(200).json(salas);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erro ao listar salas", error: err.message });
  }
};
