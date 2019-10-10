const express = require('express');
const path = require('path');
const app = express.Router();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    let ruta = path.join(__dirname+'/../views/index.html');
    res.sendFile(ruta);
});

app.get('/registro',(req,res)=>{
    let ruta = path.join(__dirname+'/../views/registro.html');
    res.sendFile(ruta);
});

app.get('/registroSinQR',(req,res)=>{
    let ruta = path.join(__dirname+'/../views/registrarNoRegistrado.html');
    res.sendFile(ruta);
});

module.exports = app;
