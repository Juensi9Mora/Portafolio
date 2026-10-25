// Validación del formulario de contacto
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function (evento) {
  // Evita que la página se recargue
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || correo === '' || mensaje === '') {
    respuesta.textContent = 'Por favor completa todos los campos.';
  } else if (!correo.includes('@')) {
    respuesta.textContent = 'Escribe un correo válido.';
  } else {
    respuesta.textContent = 'Gracias, ' + nombre + '. Tu mensaje fue enviado.';
    formulario.reset();
  }
});