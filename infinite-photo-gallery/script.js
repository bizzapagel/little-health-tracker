"use strict";

// Get DOM elements
const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

// Create array to store photo data
let photosArray = [];

// Configure Unsplash API
const count = 10;
const apiKey = "6IVx3zhUz-X0U4QaGGBqzdhYfMiftJPgvmPLbTCvN7s";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes on DOM elements
// Is a good way to not have to write "setAttribute()" repeatedly
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create elements for links and photos
function displayPhotos() {
    // Run function for each object in photos array
    photosArray.forEach((photo) => {
        // Create <a> to Unsplash
        // Set attributes for new <a>
        const item = document.createElement("a");
        setAttributes(item, {
            class: "image",
            target: "_blank",
            href: photo.links.html,
        });
        // Create <img> for photo
        // Set attributes for new <img>
        const image = document.createElement("img");
        setAttributes(image, {
            title: photo.alt_description,
            alt: photo.alt_description,
            src: photo.urls.regular,  
        });
        // Put <img> inside the <a>
        // Put both inside imageContainer
        item.appendChild(image);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } 
    catch(error) {
        // If there was an error
    }
}

// On load
getPhotos();


