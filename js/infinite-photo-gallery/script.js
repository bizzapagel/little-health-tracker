"use strict";

// Get DOM elements
const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

// Vars to check if all images have loaded
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Create array to store photo data
let photosArray = [];

// Configure Unsplash API
const count = 10;
const apiKey = "6IVx3zhUz-X0U4QaGGBqzdhYfMiftJPgvmPLbTCvN7s";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// Check if all images were loaded
function imageLoaded() {
    console.log("Image was loaded");
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Helper function to set attributes on DOM elements
// Is a good way to not have to write "setAttribute()" repeatedly
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create elements for links and photos
function displayPhotos() {
    // Set how many images should be loaded
    totalImages += photosArray.length;
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
        // Event listener to check when
        // each image has finished loading
        image.addEventListener("load", imageLoaded);
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

// Check to see if scrolling near bottom
// of page. If so, load more mphotos
window.addEventListener("scroll", () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos();


