window.onload = inicio;

let registroGeneral = []; // arreglo para guardar todos los registros
let registroPersona = []; // arreglo para guardar los datos de cada usuario
let dominio = []; // arreglo que devuelve la funcion buscarDominio

function inicio(){
    let registrar = (document.getElementById("Registrar"));
    registrar.addEventListener("click", procesarRegistro);
}

function procesarRegistro(evento){
    registroPersona[0] = document.getElementById("campoNombre").value;
    registroPersona[1] = document.getElementById("campoCorreo_electronico").value;
    registroPersona[2] = document.getElementById("campoTelefono").value;
    registroPersona[3] = document.getElementById("capoUsuario_de_preferencia").value;
    registroPersona[4] = document.getElementById("campoContrasena").value;
    registroPersona[5] = document.getElementById("campoDireccion").value;
    registroPersona[6] = document.getElementById("campoConfirmacion_Correo_electronico").value;
    registroGeneral.push(registroPersona);
}

function buscarDominio(arreglo){
    for (var i in arreglo) {

     if ((arreglo[i][1]).endsWith("@upb.edu.co")) {
        dominio.push(arreglo[i]);
     }
    }
    return dominio;
}

function retornarCuenta(arg){
    let resultado = 0;
    for (var i in arg) {
        if ((arg[i][0]).includes("a") &&(arg[i][2]).endsWith("4")||(arg[i][2]).endsWith("0")) {
            resultado = resultado + 1;
        }
    }
    return resultado;
}


module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;
