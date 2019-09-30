const instance = require('../../lib/database/connection');

function agregarNuevoAsistente(bodyRequest,hash){
    let asistenteObj = JSON.parse(bodyRequest);
    asistenteObj['hash'] = hash;
    asistenteObj['asistencia'] = 'NO ASISTIÓ';

    instance.insertarUno('asistentes',asistenteObj);
}

function registrarAsistencia(platica,hashAlumno){
    nuevo = {};
    paseDeAsistencia = {}
    paseDeAsistencia[platica] = true;
    instance.actualizarUno("asistentes","hash",hashAlumno,paseDeAsistencia);
}

module.exports = {
    agregarNuevoAsistente:agregarNuevoAsistente,
    registrarAsistencia:registrarAsistencia
}