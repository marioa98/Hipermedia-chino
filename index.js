const express = require('express');
const app = express();

let port = process.env.PORT || 4000;

app.get('/', function(req, res){
    res.send('<html><head></head><body> <h1>Hola Mundo</h1> </body></html>');
});

app.listen(port);