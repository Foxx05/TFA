"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu__btn");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".blur-overlay");
    const links = document.querySelectorAll(".menu__link");
    const body = document.body; // Ajout pour gérer la classe globale
    const menuElements = document.querySelectorAll(".menu--li");

    function toggleMenu() {
        body.classList.toggle("menu--open"); // Ajoute/Retire sur <body>
        document.body.classList.toggle("no-scroll");
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


let backToTopBtn = document.querySelector('.backToTop');

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

backToTopBtn.addEventListener("click", scrollToTop);


