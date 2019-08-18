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
    subject: 'Esto es una prueba desde Node.js',
    text: 'Esto es una prueba de mi poder D:'
  };

  
function enviarMail(mensaje,direccion){
    mailOptions['text'] = mensaje;
    mailOptions['subject'] = direccion;

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