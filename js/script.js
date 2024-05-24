const buttonMenu = document.querySelector('.button__menu')
const navMobile = document.querySelector('.navegador-mobile')
let isMenuOpen = false;
// false-> fechado, se true-> aberto

buttonMenu.addEventListener('click' , function () {
    navMobile.classList.remove('invisible')
    
    buttonMenu.children[0].setAttribute('src', '../imagens/fechar.png')
    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../imagens/menu.png') : buttonMenu.children[0].setAttribute('src', '../imagens/fechar.png')

    isMenuOpen ? navMobile.classList.add('invisible') : navMobile.classList.remove('invisible')
    isMenuOpen = !isMenuOpen
})