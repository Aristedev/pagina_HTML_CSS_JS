// Seleccionamos las clases del HTML
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger);

// Creamos un evento con 'hamburger'
hamburger.addEventListener('click', () => {
    // alert("clic")
    menu.classList.toggle("spread") // menu desplegable
});

// Creamos un evneto cuando se haga 'click' la ventana
window.addEventListener('click', e => {
    console.log(e.target);
})