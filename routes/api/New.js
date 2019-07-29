const express = require('express');
const dbInstance = require('../../lib/database/connection');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/nuevoRegistro',[
    check('Nombre').matches(/^[\sa-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/),
    check('Correo').isEmail(),
    check('Edad').isNumeric(),
    check('Expediente').isNumeric(),
    check('Dependencia').matches(/^[\s\da-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/),
    check('Comentario').matches(/^[\s\da-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/),
],(req,res)=>{
    let errors = validationResult(req);

    if (!errors.isEmpty()){
        console.log("se registró con errores");
        let erroresEncontrados = errors.array().map((obj)=>{
            return `${obj['param']}Err=valor+no+valido&`;

        }).join('').slice(0,-1);

        let urlConErrores = `/?${erroresEncontrados}`
        res.redirect(urlConErrores);

    }else{
        console.log("todo en orden");
        
        let encryptObject = `${req.body['Nombre']}|${req.body['Correo']}|${req.body['Dependencia']}`;
        bcrypt.hash(encryptObject,5,(err,hash)=>{
            if (err){console.log("Errir al generar hash")};
            res.send(`tu hash para qr es ${hash}`);
        });
    }
});

module.exports = app;