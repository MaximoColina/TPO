// Declaración variables
const form = document.querySelector('#form');
const apellidoIn = document.querySelector('#apellido');
const nombreIn = document.querySelector('#nombre');
const correoIn = document.querySelector('#correo');
const comentariosIn = document.querySelector('#comentarios');


form.addEventListener('submit', (event) => {
event.preventDefault();


  // Funciones
if (!validarApellidoFt()) {
    alert('Ingrese un apellido valido');
    apellidoIn.focus();
    return;
}


if (!validarNombreFt()) {
    alert('Ingrese un nombre valido');
    nombreIn.focus();
    return;
}


if (!validarCorreoFt()) {
    alert('Ingrese un correo electrónico valido');
    correoIn.focus();
    return;
}


if (!validarComentariosFt()) {
    alert('Ingrese un comentario valido');
    comentariosIn.focus();
    return;
}


form.submit();
});


function validarApellidoFt() {
const apellido = apellidoIn.value.trim();
const regex = /^[a-zA-Z\s]+$/;
return regex.test(apellido) && apellido.length > 0 && apellido.length <= 50;
}


function validarNombreFt() {
const nombre = nombreIn.value.trim();
const regex = /^[a-zA-Z\s]+$/;
return regex.test(nombre) && nombre.length > 0 && nombre.length <= 50;
}


function validarCorreoFt() {
const correo = correoIn.value.trim();
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(correo) && correo.length > 0 && correo.length <= 50;
}


function validarComentariosFt() {
const comentarios = comentariosIn.value.trim();
return comentarios.length > 0 && comentarios.length <= 200;
}



