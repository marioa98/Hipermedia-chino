const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const proxy = require('http-proxy-middleware');

require('./models/User');
require('./services/passport');

const app = express();

app.use(
    '/auth/google',
    proxy({target:'http://localhost:4000', changeOrigin:true})
)

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

let port = process.env.PORT || 4000;
mongoose.connect(keys.mongoURI);

require('./routes/authRouthes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));