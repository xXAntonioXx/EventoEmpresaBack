const fs = require('fs');

let parametros = {}

function obtenerMail(asistente,hash){
    let mail = fs.readFileSync('./views/mail/ticket.html','utf8');
    let mailPrimerParam = mail.replace('@asistente@',asistente);
    let mailSegundoParam = mailPrimerParam.replace('@asistente@',asistente);
    return mailBuffer;
}
console.log(obtenerMail());