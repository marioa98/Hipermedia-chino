const express = require('express');
require('./services/passport');

const app = express();

let port = process.env.PORT || 4000;

require('./routes/authRouthes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));