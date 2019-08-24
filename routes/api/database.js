const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const mail = require('../../services/mail/sendMail');
const db = require('../../services/database/database');

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

    }
    let correo = req.body['Correo'];
    let nombre = req.body['Nombre'];
    let dependencia = req.body['Dependencia'];
    let asistenteObjCadena = JSON.stringify(req.body);
        
    let encryptObject = `${nombre}|${correo}|${dependencia}`;
    let hash = bcrypt.hashSync(encryptObject,5);

    mail.enviarMail(correo,nombre,hash);
    db.agregarNuevoAsistente(asistenteObjCadena,hash);
        
    res.redirect('/');
    
});

module.exports = app;