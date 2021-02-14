require('dotenv').config(); // Configuracion de las variables de entorno
const app = require('./app');

// Listening
app.listen(app.get('port'), () => {
    console.log("Server on port:", app.get('port'));
});
