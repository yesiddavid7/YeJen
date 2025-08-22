const express = require ("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Importar rutas
const productos = require("./routes/products")

//(ruta del navegador)
app.use('/api',productos)

// Manejo de errores
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';
    res.status(statusCode).json({ success: false, message });
});

module.exports = app
