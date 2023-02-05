'use strict';

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body')
const burgerLinks = document.querySelectorAll('.burger-links');

const portfolioBtn = document.querySelectorAll('.portfolio-block__button');
const portfolioImages = document.querySelectorAll('.portfolio-image');

let season = '';

/* burger */

menuButton.addEventListener('click', function () {
    console.log('click')

    menu.classList.toggle('active')
    menuButton.classList.toggle('active')
    overlay.classList.toggle('hidden')
    if (menu.classList.contains('active') && menuButton.classList.contains('active')) {
        body.style.overflow = 'hidden';

    } else {
        body.style.overflow = 'visible';
    }
})

overlay.addEventListener('click', function () {
    menu.classList.remove('active')
    menuButton.classList.remove('active')
    overlay.classList.add('hidden')

    if (menu.classList.contains('active') && menuButton.classList.contains('active')) {
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

    if (menu.classList.contains('active') && menuButton.classList.contains('active')) {
        body.style.overflow = 'hidden';

    } else {
        body.style.overflow = 'visible';
    }
})

burgerLinks.forEach((link) => link.addEventListener('click', function () {
    if (link) {
        menu.classList.remove('active')
        menuButton.classList.remove('active')
        overlay.classList.add('hidden')

        if (menu.classList.contains('active') && menuButton.classList.contains('active')) {
            body.style.overflow = 'hidden';

        } else {
            body.style.overflow = 'visible';
        }
    }
}))
/* burger */


/* portfolio */
portfolioBtn.forEach((btn, index) => btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (btn.classList.contains('winter')) {
        season = 'winter'
    } else if (btn.classList.contains('summer')) {
        season = 'summer'
    } else if (btn.classList.contains('spring')) {
        season = 'spring'
    } else if (btn.classList.contains('autumn')) {
        season = 'autumn'
    }
    portfolioImages.forEach((img, index) => {
        img.src = `./src/img/pictures/${season}/${index + 1}.jpg`
    })
}))
/* portfolio */

