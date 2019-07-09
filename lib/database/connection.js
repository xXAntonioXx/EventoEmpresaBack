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

async function insertarUno(collectionName){
    open().then((client)=>{
        return client.db(dbName);
    });
}


