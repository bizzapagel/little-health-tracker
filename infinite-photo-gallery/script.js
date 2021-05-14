"use strict";

// Configure Unsplash API
const count = 10;
const apiKey = "6IVx3zhUz-X0U4QaGGBqzdhYfMiftJPgvmPLbTCvN7s";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } 
    catch(error) {
        // If there was an error
    }
}

// On load
getPhotos();