const express = require('express');
const dbInstance = require('../../lib/database/connection');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/nuevoRegistro',[
    check('Nombre').isAlpha('es-ES'),
    check('Correo').isEmail(),
    check('Edad').isNumeric(),
    check('expediente').isNumeric(),
    check('Dependecia').isAlphanumeric(),
],(req,res)=>{
    res.send("todo en orden");
});

module.exports = app;