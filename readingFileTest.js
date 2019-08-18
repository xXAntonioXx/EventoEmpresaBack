const fs = require('fs');

let parametros = {
    '@asistente@':'Alumno',
    '@tagHash@':'{hash no generado}'
}

function obtenerMail(asistente,hash){
    parametros['@asistente@'] = asistente;
    parametros['@tagHash@'] = hash;
    let mail = fs.readFileSync('./views/mail/ticket.html','utf8');
    mailBuffer = mail.replace(/(@asistente@)|(@tagHash@)/g,(param)=>{
        return parametros[param];
    });
    // let mailPrimerParam = mail.replace('@asistente@',asistente);
    // let mailSegundoParam = mailPrimerParam.replace('@asistente@',asistente);
    return mailBuffer;
}
console.log(obtenerMail('sherlock holmes','jasdlkfjakljdfajsdfljadñjalkfj'));