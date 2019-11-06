const passport = require('passport');

module.exports = (app) => {
    //Redirecciona a la API de google para validar credenciales con google.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));
    
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

};