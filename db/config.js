const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('bbdd online');

    } catch (error) {

        throw new Error('Conexión a la bbdd falló');

    }

}

module.exports = {
    dbConnection
}