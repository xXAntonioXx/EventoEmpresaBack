const instance = require('../../lib/database/connection');

function agregarNuevoAsistente(bodyRequest,hash){
    let asistenteObj = JSON.parse(bodyRequest);
    asistenteObj['hash'] = hash;

    instance.insertarUno('asistentes',asistenteObj);
}

function registrarAsistencia(platica,hashAlumno,hora){
    nuevo = {};
    paseDeAsistencia = {}
    paseDeAsistencia[platica] = hora;
    instance.actualizarUno("asistentes","hash",hashAlumno,paseDeAsistencia);
}

function registrarAsistenciaExpediente(platica,expediente,hora){
    nuevo = {};
    paseDeAsistencia = {}
    paseDeAsistencia[platica] = hora;
    instance.actualizarUno("asistentes","Expediente",expediente,paseDeAsistencia);
}

module.exports = {
    agregarNuevoAsistente:agregarNuevoAsistente,
    registrarAsistencia:registrarAsistencia,
    registrarAsistenciaExpediente:registrarAsistenciaExpediente
}