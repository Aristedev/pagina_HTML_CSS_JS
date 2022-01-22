// Seleccionamos las clases del HTML
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(hamburger);

// Creamos un evento con 'hamburger'
hamburger.addEventListener('click', () => {
    // alert("clic") // test
    menu.classList.toggle('spread') // menu desplegable
});

// Creamos un evento cuando se haga 'click' la ventana
window.addEventListener('click', event => {
    // console.log(event.target); // test
    if (menu.classList.contains('spread') // Solo si contiene a 'spread' en menu
        && event.target != menu && event.target != hamburger){ // event.target != hamburger -> evitar que se abra y cierre instantaneamente
        
        menu.classList.toggle('spread');
    }
    // Cierra el menu cuando se da 'click' en los enlaces
});