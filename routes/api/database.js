const express = require('express');
const dbInstance = require('../../lib/database/connection');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/nuevoRegistro',[
    check('Nombre').matches(/^[\sa-zA-ZñáéíóúÁÉÍÓÚüÜ]+$/),
    check('Correo').isEmail(),
    check('Edad').isNumeric(),
    check('Expediente').isNumeric(),
    check('Dependencia').matches(/^[\s\da-zA-ZñáéíóúÁÉÍÓÚüÜ]+$/)
],(req,res)=>{
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array())
        res.send(errors.isEmpty())
        //res.redirect('/');
    }else{
        console.log("todo en orden");
        
        let encryptObject = `${req.body['Nombre']}|${req.body['Correo']}|${req.body['Dependencia']}`;
        bcrypt.hash(encryptObject,5,(err,hash)=>{
            if (err){console.log("Errir al generar hash")};
            res.send(`tu hash para qr es ${hash}`);
        });
        //res.send(errors.isEmpty());
    }
});

module.exports = app;