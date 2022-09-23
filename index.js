// STARTED: SEPTEMBER 13, 2022
var documentStyle = document.documentElement.style;

// Functions for each theme
function nightFocus_colors(){
    documentStyle.setProperty('--main-background-color', '#252F35');
    documentStyle.setProperty('--secondary-background-color', '#14181B');
    documentStyle.setProperty('--tertiary-background-color', '#1F4E5F');
    documentStyle.setProperty('--font-color', '#F9F8ED');
    documentStyle.setProperty('--font-header-color', '#FFCC00');
    documentStyle.setProperty('--rest-btn-color', '#0B6113');
    documentStyle.setProperty('--rest-btn-hover', '#0C6113');
    documentStyle.setProperty('--scrollbar-color', '#1d2227');
    documentStyle.setProperty('--scrollbar-hover-color', '#1d2227');
    document.querySelector('.main-timer').style.background="url(background/focus-night.gif)";
    document.querySelector('h1').textContent = "FOCUS";
}

function nightRest_colors(){
    documentStyle.setProperty('--main-background-color', '#2B3525');
    documentStyle.setProperty('--secondary-background-color', '#141B16');
    documentStyle.setProperty('--tertiary-background-color', '#0B6113');
    documentStyle.setProperty('--font-color', '#F9F8ED');
    documentStyle.setProperty('--font-header-color', '#FFCC00');
    documentStyle.setProperty('--rest-btn-color', '#1F4E5F');
    documentStyle.setProperty('--rest-btn-hover', '#1E4E5F');
    documentStyle.setProperty('--scrollbar-color', '#2A3525');
    documentStyle.setProperty('--scrollbar-hover-color', '#2A3525');
    document.querySelector('.main-timer').style.background="url(background/rest-night.gif)";
    document.querySelector('h1').textContent = "REST";
}