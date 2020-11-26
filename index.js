require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./db/config');

//Crear servidor express
const app = express();

//Configurar cors
app.use(cors());

//Base de datos
dbConnection();

console.log(process.env);

//Rutas
app.get('/', (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'Hola mundo'
    });

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})