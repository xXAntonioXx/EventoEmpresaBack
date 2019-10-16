const nodemailer = require('nodemailer');
const emailTemplate = require('./readingTemplate');
const config = require('../../lib/config');

const transporter = nodemailer.createTransport({
    service:'SendGrid',
    auth:{
        user:config.MAIL_USER,
        pass:config.MAIL_PASS
    }
});

let mailOptions = {
    from: config.MAIL_EMAIL,
    to: 'jose_antony11@hotmail.com',
    subject: 'Ticket de Registro al Encuemsi 2019',
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