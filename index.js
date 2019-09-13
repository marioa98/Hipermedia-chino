const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

const app = express();

let port = process.env.PORT || 4000;
mongoose.connect(keys.mongoURI);

require('./routes/authRouthes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));