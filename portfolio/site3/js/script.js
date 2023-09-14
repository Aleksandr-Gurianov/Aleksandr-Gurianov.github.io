// Menu responsive
const menuToggle = document.querySelectorAll('.nav__menu__toggle');
const menu = document.querySelector('.nav__menu-items');

console.log(menuToggle, menu)

menuToggle.forEach (toggler => {
    toggler.addEventListener('click', () => menu.classList.toggle('show__menu'));
    });
