"use strict";

//menu

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu__btn");
    const overlay = document.querySelector(".blur-overlay");
    const links = document.querySelectorAll(".menu__link");
    const body = document.body;
    const menuElements = document.querySelectorAll(".menu--li");

    function toggleMenu() {
        body.classList.toggle("menu--open");
        if (window.innerWidth < 980){
            document.body.classList.toggle("no-scroll");
        }
    }
    if (menuBtn){
        menuBtn.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
        menuElements.forEach((element) => {
            element.addEventListener("click", toggleMenu);
        })
    };
    
    links.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});

//back to top

const fileName = window.location.pathname.split("/").pop();
if (fileName === "csRux.html" || fileName === "csDataplay.html" || fileName === "csDesignF.html" || fileName === "designFiction.html" || fileName ==="pageTemoin.html"){
    const backToTopButton = document.querySelector('.backToTop__cs');

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

var lastScrollTop = 0; 
const menu = document.querySelector(".menu");
if (fileName != "designFiction.html" && fileName != "pageTemoin.html") { /* a retirer si menu */
    var isMenuOpen = function() {
        return menu.classList.contains("menu--open");
    };


    window.addEventListener("scroll", function(){ 
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
};/* aussi a enlever*/


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-vertical a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelectorAll(`.nav-vertical a[href="#${entry.target.id}"`).forEach(link => link.classList.add("active"));
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));


