"use strict";

// Set toggle element
 const toggleSwitch = document.querySelector("input[type='checkbox']");
 const header = document.querySelector("#header");
 const image1 = document.querySelector("#image1");
 const image2 = document.querySelector("#image2");
 const image3 = document.querySelector("#image3");
 const textBox = document.querySelector(".project-textbox");

// Dynamically change the theme
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);




