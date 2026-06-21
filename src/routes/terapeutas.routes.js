const express = require("express");
const router = express.Router();

const Terapeuta = require("../models/Terapeuta");

router.get("/", async (req, res) => {
  try {
    const terapeutas = await Terapeuta.find();

    res.json(terapeutas);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const terapeuta = await Terapeuta.create(req.body);

    res.status(201).json(terapeuta);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const terapeuta = await Terapeuta.findById(req.params.id);

    if (!terapeuta) {
      return res.status(404).json({
        mensaje: "Terapeuta no encontrado",
      });
    }

    res.json(terapeuta);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;