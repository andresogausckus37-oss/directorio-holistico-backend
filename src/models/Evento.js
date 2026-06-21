const mongoose = require("mongoose");

const eventoSchema = new mongoose.Schema(
  {
    terapeutaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Terapeuta",
      required: true,
    },

    servicioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Servicio",
      required: true,
    },

    accion: {
      type: String,
      enum: ["whatsapp_click"],
      required: true,
    },

    origen: {
      type: String,
      default: "perfil",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Evento", eventoSchema);