let url = window.location.href.split('?');
redirectConfirm(url);

var dias = ["lunes","martes","miercoles"];
let d = new Date();


document.getElementById("lunes").style.display="none";
document.getElementById("martes").style.display="none";
document.getElementById("miercoles").style.display="none";

document.getElementById("unisonForm").style.display = "none";


document.getElementById(dias[d.getDay()-1]).style.display="grid";

function mostrarDia(diaNum){
    document.getElementById("lunes").style.display="none";
    document.getElementById("martes").style.display="none";
    document.getElementById("miercoles").style.display="none";

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
    return false;
}