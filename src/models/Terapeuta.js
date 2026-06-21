const mongoose = require("mongoose");

const terapeutaSchema = new mongoose.Schema(
  {
    nombreProfesional: {
      type: String,
      required: true,
      trim: true,
    },

    descripcion: {
      type: String,
      default: "",
    },

    whatsapp: {
      type: String,
      required: true,
    },

    pais: {
      type: String,
      required: true,
    },

    ciudad: {
      type: String,
      required: true,
    },

    modalidad: {
      type: String,
      enum: ["online", "presencial", "ambas"],
      default: "online",
    },

    foto: {
      type: String,
      default: "",
    },

    terapias: [
      {
        type: String,
      },
    ],

    activo: {
      type: Boolean,
      default: true,
    },

    destacado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Terapeuta", terapeutaSchema);