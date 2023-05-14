// Obtenemos los elementos del formulario
const form = document.querySelector('#form');
const apellidoInput = document.querySelector('#apellido');
const nombreInput = document.querySelector('#nombre');
const correoInput = document.querySelector('#correo');
const comentariosInput = document.querySelector('#comentarios');


form.addEventListener('submit', (event) => {
event.preventDefault();

  // Validamos los campos del formulario
if (!validarApellido()) {
    alert('Ingrese un apellido valido');
    apellidoInput.focus();
    return;
}

if (!validarNombre()) {
    alert('Ingrese un nombre valido');
    nombreInput.focus();
    return;
}

if (!validarCorreo()) {
    alert('Ingrese un correo electrónico valido');
    correoInput.focus();
    return;
}

if (!validarComentarios()) {
    alert('Ingrese un comentario valido');
    comentariosInput.focus();
    return;
}

// Si todo está validado, enviamos el formulario
form.submit();
});


// Funciones de validación para cada campo del formulario
function validarApellido() {
const apellido = apellidoInput.value.trim();
const regex = /^[a-zA-Z\s]+$/;
return regex.test(apellido) && apellido.length > 0 && apellido.length <= 40;
}
  
function validarNombre() {
const nombre = nombreInput.value.trim();
const regex = /^[a-zA-Z\s]+$/;
return regex.test(nombre) && nombre.length > 0 && nombre.length <= 40;
}
  
function validarCorreo() {
const correo = correoInput.value.trim();
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(correo) && correo.length > 0 && correo.length <= 40;
}
  
function validarComentarios() {
const comentarios = comentariosInput.value.trim();
return comentarios.length > 0 && comentarios.length <= 250;
}
  

