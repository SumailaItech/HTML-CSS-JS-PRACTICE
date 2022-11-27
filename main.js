'use strict';

/**
 * add event on multiple element
 */
const addEventOnElements = function(elem, type, callback) {
    for(let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
    }
}

/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded")
    this.document.body.classList.add("loaded")
})

/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]")


const toggleNavbar = function () {
    console.log("click")
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("active")
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active")
    overlay.classList.remove("active")
    document.body.classList.remove("active")
}

addEventOnElements(navbarLinks, "click", closeNavbar);