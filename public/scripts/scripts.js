let url = window.location.href.split('?');
redirectConfirm(url);

var dias = ["miercoles","jueves","viernes"];
let d = new Date();


document.getElementById("miercoles").style.display="none";
document.getElementById("jueves").style.display="none";
document.getElementById("viernes").style.display="none";

document.getElementById("unisonForm").style.display = "none";


document.getElementById(dias[d.getDay()-1]).style.display="grid";

document.getElementById("rdManGender").checked=true;

document.getElementById("NombreFaltaErr").style.display =  "none";
document.getElementById("CorreoFaltaErr").style.display = "none";
document.getElementById("EdadFaltaErr").style.display = "none";

function mostrarDia(diaNum){
    document.getElementById("miercoles").style.display="none";
    document.getElementById("jueves").style.display="none";
    document.getElementById("viernes").style.display="none";

    document.getElementById(dias[diaNum-1]).style.display="grid";
}

function mostrarPreguntas(value){
    if (value) {
        document.getElementById("unisonForm").style.display = "block";
        document.getElementById("noUnisonForm").style.display = "none";
    }else{
        document.getElementById("unisonForm").style.display = "none";
        document.getElementById("noUnisonForm").style.display = "block";
    }
}

function redirectConfirm(url){
    let parametros = url[1];

    if(!parametros){return;}

    let parametrosArray = parametros.split('&');

    parametrosArray.forEach(element => {
        let idError = element.split("=")[0]
        if(idError == "Enviado"){
            alert("registro exitoso, revisa la 'bandeja de entrada' o los 'correos no deseados' de tu correo");
        }
        console.log(idError);
        document.getElementById(idError).style.display = "inline";

    });
}

function validation(){
    if(document.getElementById("chkAlumnoNoAlumno").checked){
        document.getElementById("inpDependencia").value = "Universidad de Sonora";

    }else{
        document.getElementById("inpExpediente").value = 0;

    }
    if(!document.getElementById("txaComentario").value){
        document.getElementById("txaComentario").value="Sin comentarios";

    }

    if(!document.getElementById("impNombre").value || !document.getElementById("inpCorreo").value || !document.getElementById("inpEdad").value){
        document.getElementById("NombreFaltaErr").style.display = !document.getElementById("impNombre").value ? "inline" : "none";
        document.getElementById("CorreoFaltaErr").style.display = !document.getElementById("inpCorreo").value ? "inline" : "none";
        document.getElementById("EdadFaltaErr").style.display = !document.getElementById("inpEdad").value ? "inline" : "none";

        if(!document.getElementById("inpExpediente").value){
            document.getElementById("ExpedienteFaltaErr").style.display = !document.getElementById("ExpedienteFaltaErr").value ? "inline" : "none";

        }

        if(!document.getElementById("inpDependencia").value){
            document.getElementById("DependenciaFaltaErr").style.display = !document.getElementById("DependenciaFaltaErr").value ? "inline" : "none";

        }

        document.getElementById("txaComentario").value = "";
        document.getElementById("inpExpediente").value = "";
        return false;

    }
    return true;

}