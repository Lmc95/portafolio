// Variables MENU
const botonMenu = document.querySelector('.btn_menu');
const btnMenuCerrar = document.querySelectorAll('.btn_menu div');
const menuMobile = document.querySelector('.menu_desktop');

// Botones del menu (opciones)
const menuOpciones = document.querySelectorAll('.menu_desktop li');

// Funcionalidad a MENU mobile.
let contadorMenu = 0;

botonMenu.addEventListener('click', () => {
    contadorMenu++;
    console.log(contadorMenu);
    desplegarMenu();
})

menuOpciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        contadorMenu = 0;
        btnCerrarMenu();
    })
})

const desplegarMenu = () => {
    if(contadorMenu % 2 === 0) {
        btnCerrarMenu();
        console.log('body auto')
    }else {
        btnAbrirMenu();
        console.log('body hidden');
    }
}


// Animacion del boton "MENU" - abrir y cerrar.
const btnAbrirMenu = () => {
    // Al abrir el menu se aplican estilos al BOTON del menu en "cerrar"
    console.log('Abriendo menu');
    botonMenu.classList.add('btn_menu_cerrar');
    menuMobile.classList.add('menu_desplegar');
    document.body.style.overflow = 'hidden';
}
const btnCerrarMenu = () => {
    // Al cerrar el menu se aplican estilos al BOTON del menu "abrir"
    console.log('Cerrando menu');
    botonMenu.classList.remove('btn_menu_cerrar');
    menuMobile.classList.remove('menu_desplegar');
    document.body.style.overflow = 'auto';
}


