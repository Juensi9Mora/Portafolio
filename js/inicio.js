// 1. Menú móvil y enlace activo al hacer scroll
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('activo');
    menuIcon.classList.toggle('bx-x');
    });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('activo');
        menuIcon.classList.remove('bx-x');
    });
    });

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
        }
    });
    });

    // 2. Filtro de proyectos (Todos / Colaborativos / Personales)
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const proyectoCards = document.querySelectorAll('.proyecto-card');

    filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtroBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        const filtro = btn.getAttribute('data-filtro');
        proyectoCards.forEach(card => {
        const categoria = card.getAttribute('data-categoria');
        if (filtro === 'todos' || categoria === filtro) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
        });
    });
    });

// 3. Modal interactivo para detalles de proyectos y artículos del blog
const modal = document.getElementById('modal');
const modalCuerpo = document.getElementById('modal-cuerpo');
const cerrarModalBtn = document.getElementById('cerrar-modal');
const botonesModal = document.querySelectorAll('[data-modal]');

const contenidosModal = {
    micancha: {
        titulo: 'Mi Cancha — Arquitectura y Flujo de Usuario',
        html: `
        <p><strong>Contexto:</strong> Proyecto final colaborativo desarrollado bajo marco ágil Scrum con un equipo de 4 desarrolladores.</p>
        <p><strong>Solución técnica:</strong> Se diseñó un sistema de búsqueda y reserva de canchas sintéticas con validación de horarios, tarifas por país (COP/PEN) y panel de confirmación.</p>
        <pre>// Estructura modular de reserva
    const reserva = {
    sede: "Bogotá - Sede Norte",
    fecha: "2026-11-28",
    estado: "Confirmada"
    };</pre>
        `
    },
    trendyshop: {
        titulo: 'TrendyShop — Persistencia en el Cliente',
        html: `
        <p><strong>Contexto:</strong> Reto de desarrollo rápido en equipo (Hackathon) enfocado en comercio electrónico.</p>
        <p><strong>Solución técnica:</strong> Implementación de sincronización automática con <code>localStorage</code> para mantener los artículos seleccionados y calcular totales dinámicamente.</p>
        <pre>function guardarCarrito(items) {
    localStorage.setItem('trendy_cart', JSON.stringify(items));
    }</pre>
        `
    },
    companeros: {
        titulo: 'Compañeros de Vida — Componentes Reutilizables',
        html: `
        <p><strong>Contexto:</strong> Plataforma web para visibilizar mascotas en adopción y facilitar el contacto con fundaciones.</p>
        <p><strong>Solución técnica:</strong> Carga dinámica de encabezado y pie de página mediante <code>fetch()</code> en JavaScript para centralizar el mantenimiento del sitio.</p>
        `
    },
    planificador: {
        titulo: 'Planificador de Tareas — Manipulación del DOM',
        html: `
        <p><strong>Contexto:</strong> Herramienta personal de productividad construida con JavaScript vanilla y Bootstrap.</p>
        <p><strong>Solución técnica:</strong> Gestión de estados de tareas (pendiente/completada) con validación preventiva de entradas vacías.</p>
        `
    },
    blog1: {
        titulo: 'Arquitectura MVC en Spring Boot: Separando responsabilidades',
        html: `
        <p>Al construir APIs REST en Java con Spring Boot, mantener toda la lógica dentro del controlador dificulta las pruebas y el mantenimiento. La separación en capas resuelve este problema:</p>
        <p><strong>1. Controller:</strong> Recibe las peticiones HTTP y valida los DTOs de entrada.<br>
        <strong>2. Service:</strong> Contiene las reglas de negocio puras.<br>
        <strong>3. Repository:</strong> Gestiona la persistencia con Spring Data JPA y MySQL.</p>
        <pre>@RestController
    @RequestMapping("/api/v1/proyectos")
    public class ProyectoController {
        private final ProyectoService service;
        // Inyección por constructor recomendada
    }</pre>
        `
    },
    blog2: {
        titulo: 'Flujo de trabajo con ramas y Pull Requests en equipos Scrum',
        html: `
        <p>Trabajar en equipo en GitHub requiere acuerdos claros para evitar sobrescribir el trabajo de otros compañeros:</p>
        <p>• Crear una rama por funcionalidad (<code>feature/nombre-tarea</code>) desde <code>develop</code>.<br>
        • Realizar commits atómicos con mensajes claros (<code>feat:</code>, <code>fix:</code>, <code>style:</code>).<br>
        • Solicitar revisión de código mediante Pull Request antes de integrar cambios.</p>
        `
    },
    blog3: {
        titulo: 'Optimización de consultas SQL y normalización en MySQL',
        html: `
        <p>Un buen diseño de base de datos comienza aplicando hasta la Tercera Forma Normal (3FN) para eliminar redundancias y anomalías de actualización.</p>
        <pre>SELECT c.nombre, COUNT(r.id_reserva) AS total_reservas
    FROM clientes c
    INNER JOIN reservas r ON c.id_cliente = r.id_cliente
    GROUP BY c.nombre
    HAVING total_reservas > 2;</pre>
        `
    }
    };

function abrirModal(clave) {
    const data = contenidosModal[clave];
    if (!data) return;
    modalCuerpo.innerHTML = `<h3>${data.titulo}</h3>${data.html}`;
    modal.classList.add('abierto');
    }

    botonesModal.forEach(boton => {
    boton.addEventListener('click', () => {
        const clave = boton.getAttribute('data-modal');
        abrirModal(clave);
    });
    });

    cerrarModalBtn.addEventListener('click', () => modal.classList.remove('abierto'));
    modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('abierto');
    });

// 4. Validación del formulario de contacto (basado en tu script.js)
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === '' || correo === '' || mensaje === '') {
        respuesta.style.color = '#e06c75';
        respuesta.textContent = 'Por favor completa todos los campos antes de enviar.';
    } else if (!emailRegex.test(correo)) {
        respuesta.style.color = '#e06c75';
        respuesta.textContent = 'Por favor escribe un correo electrónico válido.';
    } else {
        respuesta.style.color = '#A7C4A2';
        respuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje fue recibido correctamente. Te responderé pronto.`;
        formulario.reset();
    }
});