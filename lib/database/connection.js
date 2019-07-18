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

function obtenerTodos(coleccion){
    open().then((client)=>{
        let db = client.db(dbName);
        let collectionInstance = db.collection(coleccion);
        collectionInstance.find({}).toArray((err,result)=>{
            console.log("ejecución de la función");
        })
        console.log("fin de la función");
        client.close();
    })
}

obtenerTodos("registro");

//insertarUno('registro',{nombre:"prueba",apellido:"test"});
