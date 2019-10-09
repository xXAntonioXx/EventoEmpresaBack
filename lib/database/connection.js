const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb://localhost:27017';
const url = 'mongodb+srv://admin:Discord1@cluster0-cuiob.mongodb.net/test?retryWrites=true&w=majority';
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
    }).catch((reason)=>console.log(reason));
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
    await open().then(async (client)=>{
        closingClient = client;
        return client.db(dbName).collection(coleccion).find(criterio).toArray();
    }).then((result,err)=>{
        if (err){console.log("Error al obtener todos los registros");}
        resultado = result;
        closingClient.close();
    });
    return resultado;
}

function actualizarUno(coleccion,propiedad,valor,nuevoValor){
    let nuevo = {$set:nuevoValor};
    let criterio = {};
    criterio[propiedad] = valor;
    open().then((client)=>{
        client.db(dbName).collection(coleccion).updateOne(criterio,nuevo);
        client.close()
    });
}
function run(){
    open().then((client)=>{
        client.close();
    })
}

module.exports={
    insertarUno:insertarUno,
    obtenerTodos:obtenerTodos,
    obtenerBuscar:obtenerBuscar,
    actualizarUno:actualizarUno
}

