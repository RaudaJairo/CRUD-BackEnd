const express = require('express');
const logger = require('morgan');
// Routes
const productsRoute = require('./routes/products.route'); // Rutas utilizadas para trabajar con las funciones de los productos

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000); // Definimos nuestro puerto dependiendo de nuestras variables de entorno, y en cas
app.use(express.json()); // Habilitar comunicacion principalmente a json

 // Middlewares
app.use(logger('dev')); // Mostrar informacion de respuestas en consola

// Routes
app.use('/products', productsRoute);

module.exports = app;
