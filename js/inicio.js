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