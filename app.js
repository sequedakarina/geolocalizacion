require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname)));

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ',process.env.PORT);
})