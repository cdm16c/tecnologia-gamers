
// FORMULARIO DE COTIZACIÓN

const formulario = document.getElementById("formulario-cotizacion");
const mensaje = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const producto = document.getElementById("producto").value;

    mensaje.textContent =
        "¡Gracias, " + nombre + "! Tu solicitud para " +
        producto + " se ha completado como demostración. " +
        "No se han enviado datos.";

    mensaje.style.color = "#16803c";

});

formulario.addEventListener("reset", function () {

    mensaje.textContent = "";

});


// CERRAR MENÚ HAMBURGUESA AL SELECCIONAR UNA OPCIÓN

const menuHamburguesa =
    document.querySelector(".menu-hamburguesa");

const enlacesMenu =
    document.querySelectorAll(".menu-lateral a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menuHamburguesa.removeAttribute("open");

    });

});
