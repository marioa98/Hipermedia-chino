const passport = require('passport');

module.exports = (app) => {
    //Redirecciona a la API de google para validar credenciales con google.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));
};