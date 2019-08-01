//aquí vamos a hacer test con mailgun y nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'Mailgun',
    auth:{
        user:'postmaster@sandbox27e8329dcd0c4b06890245a87185efd9.mailgun.org',
        pass:'544405626719e92334846df6c368c00f-f877bd7a-18fa05ab'
    }
});

var mailOptions = {
    from: '	rocker4nt0n10@gmail.com',
    to: 'jose_antony11@hotmail.com',
    subject: 'Esto es una prueba desde Node.js',
    text: 'Esto es una prueba de mi poder D:'
  };

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log("sucedio un error");
        console.log(err);
    }else{
        console.log("revisa la bandeja de outlook");
    }
});