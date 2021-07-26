"use strict";

const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("span#quote");
const quoteAuthor = document.querySelector("span#author");
const newQuoteButton = document.querySelector("button#new-quote");
const twitterButton = document.querySelector("button#twitter");
const loader = document.querySelector("#loader");

let apiQuotes = [];

// Show laoding
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function loadComplete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get quotes from API
async function getQuotes() {
    // Show loading
    loading();

    // Get quote API URL
    const apiUrl = "https://type.fit/api/quotes";

    try {
        // Fetch data from the API
        // Await waits to assign the variable until there is data
        const response = await fetch(apiUrl);

        // Assign fetched data to array as json object
        apiQuotes = await response.json();

        // Grab a random quote
        randomQuote();
    }
    
    catch(error) {
        // Catch error here
    }
}

// Random quote
function randomQuote() {
    // Show loading
    loading();

    // Get randomquote from length of API array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Set quote text values
    quoteText.textContent = quote.text;

    // Check if author field is blank
    if(quote.author == null) {
        quoteAuthor.textContent = " — Unknown";
    } else {
        quoteAuthor.textContent = ` — ${quote.author}`;
    }

    // Done loading
    loadComplete();
}

// Tweet a quote
function tweetQuote() {
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent}${quoteAuthor.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteButton.addEventListener("click", randomQuote);
twitterButton.addEventListener("click", tweetQuote);

// On Load
getQuotes();
