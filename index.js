const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRouthes');

const app = express();

let port = process.env.PORT || 4000;

authRoutes(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));