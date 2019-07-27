const express = require('express');
const vistasRoutes = require('./routes/views');
const New = require('./routes/api/New');

const app = express();

app.use("/",vistasRoutes);
app.use("/",New);

app.get("/testingRoute",(req,res)=>{
    res.header('Test-Hd','El sab-hop arruino mi vida');
    res.redirect('/');
})

app.listen(5000,()=>console.log("servidor corriendo"));