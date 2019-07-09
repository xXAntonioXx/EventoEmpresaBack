const express = require('express');
const path = require('path');
const app = express.Router();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    let ruta = path.join(__dirname+'/../views/index.html');
    res.sendFile(ruta);
    //res.render(ruta);
});

module.exports = app;
