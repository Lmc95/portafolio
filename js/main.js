// Variables MENU
const botonMenu = document.querySelector('.btn_menu');
const btnMenuCerrar = document.querySelectorAll('.btn_menu div');
const menuMobile = document.querySelector('.menu_desktop');

// Botones modo dia/noche
const btnColor = document.querySelector('.btn_color');
const btnDia = document.getElementById('dia');
const btnNoche = document.getElementById('noche');

// Contenedores
const headerN = document.querySelector('header');
const borderHeader = document.querySelector('.border_bottom');
const contMain = document.querySelector('main');
const menuLateral = document.querySelector('.menu_lateral');
const contPadre = document.getElementById('contenedor_padre');
const separador = document.querySelectorAll('.separador');
const cartaProyecto = document.querySelectorAll('.carta_proyecto');
const cartaFormacion = document.querySelector('.lista_cursos');
const footerN = document.querySelector('footer');


let contadorBtnColor = 0;
 btnColor.addEventListener('click', () => {
    contadorBtnColor++;
    btnLuz();
 })

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

// Animacion del boton DIA/NOCHE
const btnLuz = () => {
    if(contadorBtnColor % 2 === 0) {
        modoDia();
    }else {
        modoNoche();
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

// Modo noche
const modoNoche = () => {
    // Boton modo noche
    btnDia.style.display = 'none';
    btnNoche.style.display = 'block';
    // Estilos noche
    document.body.classList.add('body_oscuro');
    botonMenu.classList.add('btn_menu_oscuro');
    headerN.classList.add('header_oscuro');
    borderHeader.classList.add('border_bottom_oscuro');
    menuMobile.classList.add('menu_desktop_oscuro');
    contMain.classList.add('modo_oscuro');
    menuLateral.classList.add('menu_lateral_oscuro');
    contPadre.classList.add('cont_padre_oscuro');
    separador.forEach(e => {
        e.classList.add('separador_oscuro');
    })
    cartaProyecto.forEach(e => {
        e.classList.add('carta_oscuro');
    })
    cartaFormacion.classList.add('lista_oscuro');
    footerN.classList.add('footer_oscuro');
}
const modoDia = () => {
    // Boton modo dia
    btnDia.style.display = 'block';
    btnNoche.style.display = 'none';
    // Estilos dia
    document.body.classList.remove('body_oscuro');
    botonMenu.classList.remove('btn_menu_oscuro');
    headerN.classList.remove('header_oscuro');
    borderHeader.classList.remove('border_bottom_oscuro');
    menuMobile.classList.remove('menu_desktop_oscuro');
    contMain.classList.remove('modo_oscuro');
    menuLateral.classList.remove('menu_lateral_oscuro');
    contPadre.classList.remove('cont_padre_oscuro');
    separador.forEach(e => {
        e.classList.remove('separador_oscuro');
    })
    cartaProyecto.forEach(e => {
        e.classList.remove('carta_oscuro');
    })
    cartaFormacion.classList.remove('lista_oscuro');
    footerN.classList.remove('footer_oscuro');
}
