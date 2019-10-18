const proxy = require('http-proxy-middleware');

module.exports = app =>{
    app.use(proxy(['/auth/google', '/auth/google/callback', '/api/current_user'], {target: `http://localhost:4000`}))
}