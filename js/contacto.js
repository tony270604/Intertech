/*Capturar los datos del formulario*/
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = {
        nombre: e.target.nombre.value,
        telefono: e.target.telefono.value,
        email: e.target.email.value,
        mensaje: e.target.mensaje.value
    };
    console.log("Datos capturados:", datos);
    alert("Gracias " + datos.nombre + ", hemos recibido tu mensaje.");
    e.target.reset();
});

/*Para ver el archivo*/
document.getElementById("btnBrochure").addEventListener("click", () => {
    window.open("../documents/intertech-brochure.pdf", "_blank");
});


/*Metodo del boton de la hamburguesa*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    });
};
showMenu('nav-toggle', 'nav-menu');

/*Abrir y cerrar Submenus*/
document.querySelectorAll('.dropdown-item > .nav-link').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const parent = item.parentElement;

        document.querySelectorAll('.dropdown-item').forEach(drop => {
            if (drop !== parent) drop.classList.remove('show-dropdown');
        });

        parent.classList.toggle('show-dropdown');
    });
});

/*Para ver el cpanel*/
document.getElementById("btn-user").addEventListener("click", () => {
    window.open("https://www.intertechperu.net:2096/logout/?locale=es", "_blank");
});

/*SCRIPT PARA ANIMACIONES */
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade-up");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }else{
                entrada.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observador.observe(el));
});