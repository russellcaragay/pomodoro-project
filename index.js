// STARTED: SEPTEMBER 13, 2022
var documentStyle = document.documentElement.style;

var hours = new Date().getHours();

if (hours >= 6 && hours <= 18){
    var theme = "day";
    dayFocus_colors()
}

else{
    var theme = "night";
    nightFocus_colors()
}

// Countdown
//will update pa
var pomoMinute = 50;

document.getElementById("btn1").addEventListener("click", function(){
  pomoMinute = 20;
  console.log("min is 20");
})

document.getElementById("btn").addEventListener("click", function(){
  let timer = pomoMinute*60;
  startTime(timer);
})

function startTime(time){
  let interval = setInterval(timer,1000);
  function timer(){
      const minutes = Math.floor(time/60);
      let seconds = time % 60;

      if (seconds < 10){
        seconds = "0" + seconds;
      }
      document.getElementById('time').innerHTML =  `${minutes}:${seconds}`;
      time--;

    //set the time to zero
     if (time < 0) {
        clearInterval(interval);
      }
  }
}

// Functions for each theme
function nightFocus_colors(){
    documentStyle.setProperty('--main-background-color', '#252F35');
    documentStyle.setProperty('--secondary-background-color', '#14181B');
    documentStyle.setProperty('--tertiary-background-color', '#1F4E5F');
    documentStyle.setProperty('--font-color', '#F9F8ED');
    documentStyle.setProperty('--font-header-color', '#FFCC00');
    documentStyle.setProperty('--change-btn-color', '#0B6113');
    documentStyle.setProperty('--change-btn-hover', '#0C6113');
    documentStyle.setProperty('--scrollbar-color', '#1d2227');
    documentStyle.setProperty('--scrollbar-hover-color', '#1d2227');
    document.querySelector('.main-timer').style.backgroundImage="url(background/focus-night.gif)";
    document.querySelector('h1').textContent = "FOCUS";
    document.querySelector('.change-btn').textContent = "REST";
    document.querySelector("#theme").classList.remove("fa-moon");
    document.querySelector("#theme").classList.add("fa-sun");
}

function nightRest_colors(){
    documentStyle.setProperty('--main-background-color', '#2B3525');
    documentStyle.setProperty('--secondary-background-color', '#141B16');
    documentStyle.setProperty('--tertiary-background-color', '#0B6113');
    documentStyle.setProperty('--font-color', '#F9F8ED');
    documentStyle.setProperty('--font-header-color', '#FFCC00');
    documentStyle.setProperty('--change-btn-color', '#1F4E5F');
    documentStyle.setProperty('--change-btn-hover', '#1E4E5F');
    documentStyle.setProperty('--scrollbar-color', '#2A3525');
    documentStyle.setProperty('--scrollbar-hover-color', '#2A3525');
    document.querySelector('.main-timer').style.backgroundImage="url(background/rest-night.gif)";
    document.querySelector('h1').textContent = "REST";
    document.querySelector('.change-btn').textContent = "FOCUS";
    document.querySelector("#theme").classList.remove("fa-moon");
    document.querySelector("#theme").classList.add("fa-sun");
}

function dayFocus_colors(){
    documentStyle.setProperty('--main-background-color', '#dff6ff');
    documentStyle.setProperty('--secondary-background-color', '#5389b2');
    documentStyle.setProperty('--tertiary-background-color', '#133643');
    documentStyle.setProperty('--font-color', 'black');
    documentStyle.setProperty('--font-header-color', 'black');
    documentStyle.setProperty('--change-btn-color', '#5baf59');
    documentStyle.setProperty('--change-btn-hover', '#55aa54');
    documentStyle.setProperty('--scrollbar-color', '#396e96');
    documentStyle.setProperty('--scrollbar-hover-color', '#35668c');
    document.querySelector('.main-timer').style.backgroundImage="url(background/focus-day.gif)";
    document.querySelector('h1').textContent = "FOCUS";
    document.querySelector('.change-btn').textContent = "REST";
    document.querySelector("#theme").classList.add("fa-moon");
    document.querySelector("#theme").classList.remove("fa-sun");
}


function dayRest_colors(){
    documentStyle.setProperty('--main-background-color', '#DFFFE2');
    documentStyle.setProperty('--secondary-background-color', '#5BAF59');
    documentStyle.setProperty('--tertiary-background-color', '#134332');
    documentStyle.setProperty('--font-color', 'black');
    documentStyle.setProperty('--font-header-color', 'black');
    documentStyle.setProperty('--change-btn-color', '#5389B2');
    documentStyle.setProperty('--change-btn-hover', '#5589B2');
    documentStyle.setProperty('--scrollbar-color', '#134332');
    documentStyle.setProperty('--scrollbar-hover-color', '#134332');
    document.querySelector('.main-timer').style.backgroundImage="url(background/rest-day.gif)";
    document.querySelector('h1').textContent = "REST";
    document.querySelector('.change-btn').textContent = "FOCUS";
    document.querySelector("#theme").classList.add("fa-moon");
    document.querySelector("#theme").classList.remove("fa-sun");
}