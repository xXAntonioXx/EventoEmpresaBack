const express = require('express');
const vistasRoutes = require('./routes/views');

const app = express();

app.use("/",vistasRoutes);

app.listen(5000,()=>console.log("servidor corriendo"));