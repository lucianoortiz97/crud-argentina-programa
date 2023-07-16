window.onload=inicio;
var inputDni=document.getElementById("dni");
var inputNombre=document.getElementById("nombre");
var inputApellido=document.getElementById("apellido"); 
var inputDireccion=document.getElementById("direccion"); 
var inputEmail=document.getElementById("email");

var inputDniSoc=document.getElementById("dniSocio");
var inputDniBuscado=document.getElementById("dniBuscado");
var inputNombreSoc=document.getElementById("nombreSocio");
var inputApellidoSoc=document.getElementById("apellidoSocio"); 
var inputDireccionSoc=document.getElementById("direccionSocio"); 
var inputEmailsoc=document.getElementById("emailSocio"); 

var btnEnviar=document.getElementById("btn1");
var btnBuscar=document.getElementById("btn2");
var btnBuscarSoc=document.getElementById("btn3");
var socio={};
var socios=[];
var socios=JSON.parse(localStorage.getItem("socLS"));

function inicio (){
btnEnviar.addEventListener("click", guardarSocioNuevo);
};



function guardarSocioNuevo (){
    socio={}; 

    socio.dni=inputDni.value; 
    socio.nombre=inputNombre.value; 
    socio.apellido=inputApellido.value; 
    socio.direccion=inputDireccion.value; 
    socio.email=inputEmail.value; 

    inputDni.value=""; 
    inputNombre.value=""; 
    inputApellido.value=""; 
    inputDireccion.value=""; 
    inputEmail.value=""; 

    var inputCuota="Para verificar"; 
    socio.cuota=inputCuota; 
    inputCuota="";

    var inputCategoriaSocio="A asignar"; 
    socio.categoria=inputCategoriaSocio; 
    inputCategoriaSocio="";

    var inputAccesoEstadio="A asignar"; 
    socio.acceso=inputAccesoEstadio; 
    inputAccesoEstadio="";

    /*socios.push(socio);*/
    localStorage.setItem("socLS",JSON.stringify(socios));

    alert("Su formulario fue enviado correctamente");
};