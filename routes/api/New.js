const express = require('express');
const dbInstance = require('../../lib/database/connection');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const mail = require('../../services/mail/sendMail');
const emailTemplate = require('../../services/mail/readingTemplate');

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
],async (req,res)=>{
    let errors = validationResult(req);

    if (!errors.isEmpty()){
        console.log("se registró con errores");
        let erroresEncontrados = errors.array().map((obj)=>{
            return `${obj['param']}Err=valor+no+valido&`;

        }).join('').slice(0,-1);

        let urlConErrores = `/?${erroresEncontrados}`
        res.redirect(urlConErrores);

    }else{
        let nombre = req.body['Nombre'];
        let correo = req.body['Correo'];
        
        let encryptObject = `${nombre}|${correo}|${req.body['Dependencia']}`;
        let hash = bcrypt.hashSync(encryptObject,5,);
        let mailTemplate = emailTemplate.obtenerMail(nombre,hash);
        mail.enviarMail(correo,mailTemplate);
        res.redirect('/');
    }
});

module.exports = app;