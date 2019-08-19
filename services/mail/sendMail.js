const nodemailer = require('nodemailer');

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

  
function enviarMail(direccion,template){
    mailOptions['to'] = direccion;
    mailOptions['html'] = template;

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log("sucedio un error");
            console.log(err);
        }else{
            console.log("revisa la bandeja de outlook");
        }
    });
}

module.exports = {
    enviarMail:enviarMail
}