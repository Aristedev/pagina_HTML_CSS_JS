const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburger');

// Test:
// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);

// 1. Evento para cada una de las imágenes
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // alert('Test: Click en las imagenes');
        // console.log(imagen.getAttribute('src')); // Test: Dirección de las imágenes
        aparecerImagen(imagen.getAttribute('src'));
    })
});

// 3. Evento para cerrar el lightbox con el icono de «close»
contenedorLight.addEventListener('click', event => {
    if(event.terget != imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        // Evento para el «hamburger», al cerrar el lightbox:
        hamburger1.style.opacity = '1';
    }
})

// 2. Función para la iteración de .forEach(), del paso 1
const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen; // el atributo «src» de «.agregar-imagen» toma el valor del parámetro «imagen»
    contenedorLight.classList.toggle('show'); // Fondo oscuro: Agregar y quitar la clase «show» -> contenedor del Lightbox
    imagenesLight.classList.toggle('showImage'); // Imagen en el fondo oscuro
    // Evento para el «hamburger», al abrir el lightbox:
    hamburger1.style.opacity = '0';
};