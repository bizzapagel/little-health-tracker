"use strict";

// Get DOM elements
const button = document.querySelector("#button");
const audioElement = document.querySelector("#audio");

// Disable/enable button
function toggleButton() {
    button.disabled = !button.disabled;
}

// VoiceRSS Javascript SDK
const VoiceRSS={speech:function(e){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){var a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText;audioElement.src=t.responseText,audioElement.play()}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest:function(e){var a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&r="+(e.r||"")+"&c="+(a||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};

// Pass joke to Voice RSS API
function tellTheJoke(joke) {
    VoiceRSS.speech({
        key: "3536eaef493d4b5194491361d9911598",
        src: joke,
        hl: "en-us",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false
    });
}

// Get joke from Jokes API
async function getTheJoke() {
    let joke = "";
    const apiUrl = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    try {
        // Fetch data from API
        // and save it as json data 
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Save setup and delivery into joke variable
        joke = `${data.setup} ... ${data.delivery}`;
        // Pass joke into tellTheJoke() function
        tellTheJoke(joke);
        toggleButton();
    }
    catch(error) {
        // There was an error
        console.log("An error occurred -", error);
    }   
}

// Check for button click
button.addEventListener("click", getTheJoke);

// Check for audio end
audio.addEventListener("ended", toggleButton);
