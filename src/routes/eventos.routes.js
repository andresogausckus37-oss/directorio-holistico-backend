const express = require("express");
const router = express.Router();

const Evento = require("../models/Evento");

router.get("/", async (req, res) => {
  try {
    const eventos = await Evento.find()
      .populate("terapeutaId")
      .populate("servicioId");

    res.json(eventos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const evento = await Evento.create(req.body);

    res.status(201).json(evento);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;