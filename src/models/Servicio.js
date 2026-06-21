const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema(
  {
    terapeutaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Terapeuta",
      required: true,
    },

    titulo: {
      type: String,
      required: true,
    },

    descripcion: {
      type: String,
      default: "",
    },

    duracion: {
      type: String,
      default: "",
    },

    precio: {
      type: Number,
      required: true,
    },

    moneda: {
      type: String,
      default: "ARS",
    },

    modalidad: {
      type: String,
      enum: ["online", "presencial", "ambas"],
      default: "online",
    },

    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Servicio", servicioSchema);