'use strict';

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body')



menuButton.addEventListener('click', function () {
    console.log('click')

    menu.classList.toggle('active')
    menuButton.classList.toggle('active')
    overlay.classList.toggle('hidden')
    if (menu.classList.contains('active') &&  menuButton.classList.contains('active')) {
        body.style.overflow = 'hidden';

    } else {
        body.style.overflow = 'visible';
    }


})

overlay.addEventListener('click', function () {
    menu.classList.remove('active')
    menuButton.classList.remove('active')
    overlay.classList.add('hidden')

    if (menu.classList.contains('active') &&  menuButton.classList.contains('active')) {
        body.style.overflow = 'hidden';

    } else {
        body.style.overflow = 'visible';
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        // Проверка, НЕ(!) содержит ли класс hidden
        menu.classList.remove('active')
        menuButton.classList.remove('active')
        overlay.classList.add('hidden')
    }

    if (menu.classList.contains('active') &&  menuButton.classList.contains('active')) {
        body.style.overflow = 'hidden';

    } else {
        body.style.overflow = 'visible';
    }
})