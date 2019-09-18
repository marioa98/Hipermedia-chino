const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

const app = express();
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
}))

let port = process.env.PORT || 4000;
mongoose.connect(keys.mongoURI);

require('./routes/authRouthes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));