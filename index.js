const express = require('express');
const vistasRoutes = require('./routes/views');
const database = require('./routes/api/database');

const app = express();

app.use("/",vistasRoutes);
app.use("/",database);

app.listen(5000,()=>console.log("servidor corriendo"));