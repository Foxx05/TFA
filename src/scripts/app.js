"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu__btn");
    const overlay = document.querySelector(".blur-overlay");
    const links = document.querySelectorAll(".menu__link");
    const body = document.body; // Ajout pour gérer la classe globale
    const menuElements = document.querySelectorAll(".menu--li");

    function toggleMenu() {
        body.classList.toggle("menu--open"); // Ajoute/Retire sur <body>
        if (window.innerWidth < 980){
            document.body.classList.toggle("no-scroll");
        }
    }

    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    menuElements.forEach((element) => {
        element.addEventListener("click", toggleMenu);
    });
    
    links.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});

const backToTopButton = document.getElementById('backToTop');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // défilement doux
    });
});

var lastScrollTop = 0; 
const menu = document.querySelector(".menu");

var isMenuOpen = function() {
    return menu.classList.contains("menu--open");
};

window.addEventListener("scroll", function() { 
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (!isMenuOpen()) {
        if (scrollTop > lastScrollTop) { 
            menu.classList.add("hidden");
        } else { 
            menu.classList.remove("hidden");
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });



