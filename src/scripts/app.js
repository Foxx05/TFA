"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu__btn");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".blur-overlay");
    const links = document.querySelectorAll(".menu__link");
    const body = document.body; // Ajout pour gérer la classe globale

    function toggleMenu() {
        body.classList.toggle("menu--open"); // Ajoute/Retire sur <body>
        document.body.classList.toggle("no-scroll");
    }

    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    
    links.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});


