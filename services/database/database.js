const instance = require('../../lib/database/connection');

function agregarNuevoAsistente(bodyRequest,hash){
    let asistenteObj = JSON.parse(bodyRequest);
    asistenteObj['hash'] = hash;

    instance.insertarUno('asistentes',asistenteObj);
}

function registrarAsistencia(platica,hashAlumno,hora){
    //let nuevo = {};
    let paseDeAsistencia = {}
    paseDeAsistencia[platica] = hora;
    instance.actualizarUno("asistentes","hash",hashAlumno,paseDeAsistencia);
}

function registrarAsistenciaExpediente(platica,expediente,hora){
    //let nuevo = {};
    let paseDeAsistencia = {}
    paseDeAsistencia[platica] = hora;
    instance.actualizarUno("asistentes","Expediente",expediente,paseDeAsistencia);
}

function registrarSinQR(expediente,platica,hora){
    let nuevoReg = {};
    nuevoReg['Expediente'] = expediente;
    nuevoReg[platica] = hora;
    instance.insertarUno("asistentes",nuevoReg);
}

module.exports = {
    agregarNuevoAsistente:agregarNuevoAsistente,
    registrarAsistencia:registrarAsistencia,
    registrarAsistenciaExpediente:registrarAsistenciaExpediente,
    registrarSinQR:registrarSinQR
}