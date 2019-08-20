const instance = require('../../lib/database/connection');

function agregarNuevoAsistente(bodyRequest,hash){
    let asistenteObj = JSON.parse(bodyRequest);
    asistenteObj['hash'] = hash;
    asistenteObj['asistencia'] = 'NO ASISTIÓ';

    instance.insertarUno('asistentes',asistenteObj);
}

module.exports = {
    agregarNuevoAsistente:agregarNuevoAsistente
}