const express = require("express");
const cors = require("cors");
require("dotenv").config();

const conectarDB = require("./config/db");

const terapeutasRoutes = require("./routes/terapeutas.routes");
const serviciosRoutes = require("./routes/servicios.routes");
const eventosRoutes = require("./routes/eventos.routes");

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "Backend Directorio Holístico funcionando 🌿",
  });
});

app.use("/terapeutas", terapeutasRoutes);
app.use("/servicios", serviciosRoutes);
app.use("/eventos", eventosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});