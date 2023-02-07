'use strict';


const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body')
const burgerLinks = document.querySelectorAll('.burger-links');

const portfolioBtn = document.querySelectorAll('.portfolio-block__button');
const portfolioImages = document.querySelectorAll('.portfolio-image');

import i18Obj from './translate.js';

const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

// кеширование картинок
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach(el => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./src/img/pictures/${el}/${i}.jpg`;
        }
    });
}

preloadImages();

function changeClassActive(btn, classActive) {
    document.querySelector(`.${classActive}`)?.classList
        .remove(`${classActive}`);
    btn.classList.add(`${classActive}`);
}


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
portfolioBtn.forEach((btn) => btn.addEventListener('click', function (e) {
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

    changeClassActive(btn, 'portfolio-btn__active')
}))
/* portfolio */

// translate
function getTranslate(lng) {
    const i18nList = document.querySelectorAll('[data-i18]');
    i18nList.forEach(el => el.textContent = i18Obj[lng][el.dataset.i18])
}

en.addEventListener('click', () => getTranslate('en'));
ru.addEventListener('click', () => getTranslate('ru'));

function switchActiveClass(event) {
    en.classList.remove('lng-span-active');
    ru.classList.remove('lng-span-active');
    this.classList.add('lng-span-active');
}

en.addEventListener('click', switchActiveClass);
ru.addEventListener('click', switchActiveClass);


// translate


// switch theme
// btn-theme switch-theme
const themeButton = document.querySelector('.btn-theme');
const switchTheme = document.querySelector('.switch-theme');
const themeIcon = document.querySelector('.theme-icon');
const contactsButton = document.querySelector('.contacts__button');

contactsButton.addEventListener('click', function (e) {
    e.preventDefault()
})
let isWhite = false;
themeButton.addEventListener('click', function () {
    isWhite = true;


    const btnTheme = document.querySelector('.btn-theme');
    // btnTheme.style.background = `url("../src/img/icons/theme/Vector.svg") no-repeat`
    btnTheme.classList.toggle('btn-theme-white-style');
    const logo = document.querySelector('.icon-logo');
    console.log('black')

    logo.classList.toggle('logo-white-style');
    body.classList.toggle('body-white-style');
    const welcomeTitle = document.querySelector('.welcome__title');
    welcomeTitle.classList.toggle('welcome__title-white-style')

    const welcomeWrapper = document.querySelector('.welcome__wrapper');
    const headerWrapper = document.querySelector('.header__wrapper');
    const headerNavList = document.querySelector('.header__nav-list')
    const headerLinks = document.querySelectorAll('.header-link ');
    headerNavList.classList.toggle('header__nav-list-white-style')
    welcomeWrapper.classList.toggle('welcome__wrapper-white-style');
    headerWrapper.classList.toggle('header__wrapper-white-style');
    headerLinks.forEach((link) => {
        link.classList.toggle('header-link-white-style');
    })

    const welcomeBtn = document.querySelector('.welcome-block__button');

    welcomeBtn.classList.toggle('welcome-block__button-white-style');
    welcomeBtn.classList.toggle('welcome-block__button-hover')

    const titles = document.querySelectorAll('.title');
    titles.forEach((title) => {
        title.classList.toggle('title-white-style')
    })

    const skillsItemTitles = document.querySelectorAll('.skills-item__title');
    const skillsItemTextes = document.querySelectorAll('.skills-item__text');

    skillsItemTitles.forEach((title) => {
        title.classList.toggle('skills-item__title-white-style');
    })
    skillsItemTextes.forEach((text) => {
        text.classList.toggle('skills-item__text-white-style')
    })
    portfolioBtn.forEach((btn) => {
        btn.classList.toggle('portfolio-block__buttons-white-style')
    });

    const priceButtons = document.querySelectorAll('.price-btn');
    const priceItems = document.querySelectorAll('.price-item');
    const priceCost = document.querySelectorAll('.price-cost');
    priceItems.forEach((item) => {
        item.classList.toggle('price-items-white-style')
    })
    priceButtons.forEach((btn) => {
        btn.classList.toggle('price-btn-white-style')
    })
    priceCost.forEach((el) => {
        el.classList.toggle('price-cost-white-style')
    })

    const contactsWrapper = document.querySelector('.contacts__wrapper');
    const contactsTitle = document.querySelector('.contacts__title');
    const inputTypeEmail = document.querySelector('.input__type-email');
    const inputTypeTel = document.querySelector('.input__type-tel');
    const textMessage = document.querySelector('.text__message');
    const contactsButton = document.querySelector('.contacts__button');
    const footerIcons = document.querySelectorAll('.footer-icon');
    const footer = document.querySelector('.footer');
    const rss = document.querySelector('.rss');
    const githubUsername = document.querySelector('.github-username');
    const year = document.querySelector('.year');
    const copyright = document.querySelector('.copyright');
    const burgerLinksAll = document.querySelectorAll('.burger-link');
    // const menuActive
    contactsWrapper.classList.toggle('contacts__wrapper-white-style')
    contactsTitle.classList.toggle('contacts__title-white-style')
    inputTypeEmail.classList.toggle('input__type-email-white-style')
    inputTypeTel.classList.toggle('input__type-tel-white-style')
    textMessage.classList.toggle('text__message-white-style')
    contactsButton.addEventListener('click', function (e) {
        e.preventDefault()
    })
    contactsButton.classList.toggle('contacts__button-white-style');
    footer.classList.toggle('footer-white-style');
    footerIcons.forEach((icon) => {
        icon.classList.toggle('footer-icon-white-style')
    })
    rss.classList.toggle('rss-white-style');
    githubUsername.classList.toggle('githubUsername-white-style');
    year.classList.toggle('year-white-style')
    copyright.classList.toggle('copyright-white-style')

    menu.classList.toggle('menu-white-style')
    menuButton.classList.toggle('menu-btn-white-style')
    burgerLinksAll.forEach((link) => {
        link.classList.toggle('burger-link-white-style')
    })


})