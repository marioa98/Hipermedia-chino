const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

let port = process.env.PORT || 4000;

passport.use(new googleStrategy());

// app.get('/', function (req, res) {
//     res.send('<html><head></head><body> <h1>Hola Mundo</h1> </body></html>');
// });

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));