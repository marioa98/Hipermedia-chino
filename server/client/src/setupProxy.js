const proxy = require('http-proxy-middleware');

module.exports = app =>{
    app.use(proxy(['/auth/google', '/auth/google/callback', '/api/logout', '/api/current_user', '/api/*'], {target: `http://localhost:4000`}))
}