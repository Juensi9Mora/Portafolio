const tecnologias = [
  { nombre: 'Java', icono: 'java' },
  { nombre: 'JavaScript', icono: 'javascript' },
  { nombre: 'HTML', icono: 'html5' },
  { nombre: 'CSS', icono: 'css3' },
  { nombre: 'Spring', icono: 'spring' },
  { nombre: 'Node.js', icono: 'nodejs' },
  { nombre: 'MySQL', icono: 'mysql' },
  { nombre: 'APIs REST', icono: 'postman' },
  { nombre: 'Git', icono: 'git' },
  { nombre: 'GitHub', icono: 'github' },
  { nombre: 'Figma', icono: 'figma' },
  { nombre: 'VS Code', icono: 'vscode' }
];

const habilidades = [
  { nombre: 'Java', nivel: 85 },
  { nombre: 'JavaScript', nivel: 70 },
  { nombre: 'SQL', nivel: 75 },
  { nombre: 'HTML / CSS', nivel: 80 },
  { nombre: 'Git', nivel: 65 }
];

// reforzar 
const textoCodigo = `import { craft } from '@atelier/core';

const ingredients = {
  logic: 'Java',
  essence: 'curiosity',
  care: 100
};

function transmute() {
  return craft(ingredients);
}

// El código florece.`;

const elementoCodigo = document.getElementById('codigo');
let posicion = 0;

function escribir() {
  if (posicion < textoCodigo.length) {
    elementoCodigo.textContent += textoCodigo.charAt(posicion);
    posicion++;
    setTimeout(escribir, 35);
  }
}
escribir();

const listaStack = document.getElementById('lista-stack');
tecnologias.forEach(function (t) {
  listaStack.innerHTML += `
    <div class="col-6 col-md-3 col-lg-2">
      <div class="tech">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icono}/${t.icono}-original.svg" alt="${t.nombre}">
        <p>${t.nombre}</p>
      </div>
    </div>`;
});

// // Barras de habilidad no funciona
// const contenedorHab = document.getElementById('habilidades');
// habilidades.forEach(function (h) {
//   contenedorHab.innerHTML += `
//     <div class="hab">
//       <div class="hab-nombre"><span>${h.nombre}</span><span>${h.nivel}%</span></div>
//       <div class="barra-hab"><div data-ancho="${h.nivel}"></div></div>
//     </div>`;
// });


const listaProyectos = document.getElementById('lista-proyectos');
proyectos.forEach(function (p) {
  listaProyectos.innerHTML += `
    <div class="col-md-4">
      <div class="tarjeta proyecto">
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>
        <a href="${p.enlace}">Ver en GitHub</a>
      </div>
    </div>`;
});

// // rellenar las barras no funciona
// const barras = document.querySelectorAll('[data-ancho]');
// const observador = new IntersectionObserver(function (entradas) {
//   entradas.forEach(function (entrada) {
//     if (entrada.isIntersecting) {
//       entrada.target.style.width = entrada.target.dataset.ancho + '%';
//     }
//   });
// });
// barras.forEach(function (b) { observador.observe(b); });

// se debe mejorar se ve raro
document.getElementById('formulario').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const respuesta = document.getElementById('respuesta');

  if (nombre === '' || correo === '' || mensaje === '') {
    respuesta.textContent = 'Completa todos los campos.';
  } else if (!correo.includes('@')) {
    respuesta.textContent = 'Escribe un correo válido.';
  } else {
    respuesta.textContent = '¡Gracias, ' + nombre + '! Tu mensaje fue enviado.';
    this.reset();
  }
});
