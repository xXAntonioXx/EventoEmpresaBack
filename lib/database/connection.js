const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'asistentes';

function open(){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
            if (err){
                console.log("el error esta en la funcion open de la conexion a bd");
                reject();
            }
            resolve(client);
        });
    });
}

function insertarUno(coleccion,obj){
    open().then((client)=>{
        client.db(dbName).collection(coleccion).insertOne(obj);
        client.close()
    });
}

async function obtenerUno(coleccion,condition){
    let resultado = {};
    await open().then((client)=>{
        resultado = client.collection(coleccion).find(condition);
    });
    return resultado;
}

function obtenerTodos(coleccion){
    return new Promise((resolve,reject)=>{
        open().then((client)=>{
            resolve(client.db(dbName).collection(coleccion).find({}));
        })
    });
}

obtenerTodos("registro").then((resultado)=>{
    console.log(resultado);
})
//insertarUno('registro',{nombre:"prueba",apellido:"test"});
