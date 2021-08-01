"use strict";

// Get DOM elements
const video = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media stream
// Then pass to video to begin playing
button.addEventListener("click", async () => {
    try {
        // Get the media steam
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
            popOutPicture();
        }
    }
    catch(error) {
        // There was an error
        console.log("An error occurred -", error);
    }
});

// Trigger async function
// when button has been clicked
async function popOutPicture() {
    // Start picture-in-picture
    await video.requestPictureInPicture();
}

