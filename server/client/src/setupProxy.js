const proxy = require('http-proxy-middleware');

module.exports = app =>{
    app.use(proxy(['/auth/google', '/auth/google/callback', '/api/logout', '/api/current_user'], {target: `http://localhost:4000`}))
}

// , '/api/*'