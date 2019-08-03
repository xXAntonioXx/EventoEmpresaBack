const fs = require('fs');

fs.readFile('./views/mail/ticket.html',"utf8",(err,data)=>{
    if(err){console.log(err)}
    let afterParametersMail = data.replace("%tagHash%","$2b$05$Cqok7Ze.aOxg9gkq7BSVmO3mQfI2j4/jl64nolRnToQIeDnNIThGO");
    console.log(afterParametersMail);
});