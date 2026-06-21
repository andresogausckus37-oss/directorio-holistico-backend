const express = require("express");
const router = express.Router();

const Servicio = require("../models/Servicio");

router.get("/", async (req, res) => {
  try {
    const servicios = await Servicio.find();

    res.json(servicios);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const servicio = await Servicio.create(req.body);

    res.status(201).json(servicio);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/terapeuta/:terapeutaId", async (req, res) => {
  try {
    const servicios = await Servicio.find({
      terapeutaId: req.params.terapeutaId,
    });

    res.json(servicios);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);

    if (!servicio) {
      return res.status(404).json({
        mensaje: "Servicio no encontrado",
      });
    }

    res.json(servicio);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;