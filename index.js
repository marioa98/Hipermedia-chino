const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

let port = process.env.PORT || 4000;

passport.use(new googleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

}, (accessToken) => {
    console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));