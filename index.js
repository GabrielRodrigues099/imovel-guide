const mobileBtn = document.querySelector('[data-btn]');
const menu = document.querySelector('[data-menu]');

const setMenu = ()=>{
    menu.classList.toggle('menu--active')
}


mobileBtn.addEventListener('click', setMenu);