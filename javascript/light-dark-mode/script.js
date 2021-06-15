"use strict";

// Set toggle element
 const toggleSwitch = document.querySelector("input[type='checkbox']");
 const toggleIcon = document.querySelector("#toggle-icon");
 const header = document.querySelector("#header");
 const image1 = document.querySelector("#image1");
 const image2 = document.querySelector("#image2");
 const image3 = document.querySelector("#image3");
 const textBox = document.querySelector(".project-textbox");

// Dark mode
function darkMode() {
    header.style.backgroundColor = "rgb(18 18 18 / 75%)";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
    imageMode("dark");
}

// Light mode
function lightMode() {
    header.style.backgroundColor = "rgb(255 255 255 / 75%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
}

// Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dynamically change the theme
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightMode();
    }
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);




