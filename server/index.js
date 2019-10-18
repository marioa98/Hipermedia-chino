const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');


require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
let app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

let port = process.env.PORT || 4000;


require('./routes/authRouthes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));