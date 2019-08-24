const MongoClient = require('mongodb').MongoClient;

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

async function obtenerTodos(coleccion){
    let resultados={};
    await open().then((client)=>{
        closingClient = client;
        return client.db(dbName).collection(coleccion).find({}).toArray();
    }).then((result,err)=>{
        if (err){console.log("Error al obtener todos los registros");}
        resultados = result;
        closingClient.close();
    });
    return resultados;
}

async function obtenerBuscar(coleccion,propiedad,valor){
    let resultado = {};
    let criterio = {};
    criterio[propiedad] = valor;
    await open().then((client)=>{
        closingClient = client;
        return client.db(dbName).collection(coleccion).find(criterio).toArray();
    }).then((result,err)=>{
        if (err){console.log("Error al obtener todos los registros");}
        resultado = result;
        closingClient.close();
    });
    console.log(resultado);
}

module.exports={
    insertarUno:insertarUno,
    obtenerTodos:obtenerTodos,
    obtenerBuscar:obtenerBuscar
}

