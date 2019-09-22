const nodemailer = require('nodemailer');
const emailTemplate = require('./readingTemplate');

const transporter = nodemailer.createTransport({
    service:'SendGrid',
    auth:{
        user:'joseMunguia',
        pass:'Discord1sg'
    }
});

let mailOptions = {
    from: '	rocker4nt0n10@gmail.com',
    to: 'jose_antony11@hotmail.com',
    subject: 'Registro de asistencia al encuentro de empresas para ing. en sistemas',
    html: 'empty mail'
  };

  
function enviarMail(direccion,nombre,hash){
    mailOptions['to'] = direccion;
    mailOptions['html'] = emailTemplate.obtenerMail(nombre,hash);

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log("sucedio un error al enviar mail");
            console.log(err);
        }
    });
}

module.exports = {
    enviarMail:enviarMail
}