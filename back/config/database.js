const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Base de datos conectada con el servidor: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar con la base de datos: ${error.message}`);
        if ((process.env.NODE_ENV || '').toUpperCase() === 'PRODUCTION') {
            process.exit(1);
        } else {
            console.warn('Continuando ejecución sin conexión a base de datos (solo desarrollo).');
        }
    }
};

module.exports = connectDatabase;