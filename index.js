// STARTED: SEPTEMBER 13, 2022
var documentStyle = document.documentElement.style;

var hours = new Date().getHours();
var mode = "focus";
var cycle = 1;

var try1 = "hello";
var list = document.getElementById("taskList");
var newParagraph = document.createElement('p').classList.add("task-name").innerHTML = "hello";


var newInput = document.createElement("INPUT").setAttribute("type", "checkbox").appendChild(newTask);
var newLabel = document.createElement('label');
var newDiv = document.createElement('div').classList.add("task-container");
var newIcon = document.createElement('i').classList.add("fa-solid fa-circle-minus remove-icon");

var taskLabel = newLabel.appendChild(newInput);
var taskButtons = document.createElement('button').appendChild(newIcon);

function try1(){
  newDiv.appendChild(taskLabel);
  newDiv.appendChild(taskButtons);
}

//<div class="task-container"><label><input type="checkbox"><p class="task-name">Task 1</p></label><button class="remove-btn"><i class="fa-solid fa-circle-minus remove-icon"></i></button></div>


// system will automatically change the theme
if (hours >= 6 && hours <= 18){
  var theme = "day";
    dayFocus_colors()
}

else{
  var theme = "night";
    nightFocus_colors()
}

document.getElementById("theme").addEventListener("click",function(){
  if (theme == "night"){
    theme = "day"
      if (mode == "focus"){
       dayFocus_colors();
      }
      else {
        dayRest_colors();
      }
  }
  else {
    theme = "night"
    if (mode == "focus"){
     nightFocus_colors();
    }
    else {
      nightRest_colors();
    }
  }
});

// Countdown
var pomoMinute = 50;
var pomoMode = "50";

// Changes the pomodoro timer configuration to 25 mins focus and 5 mins rest
document.getElementById("time-25").addEventListener("click", function(){
  pomoMinute = 25;
  pomoMode = "25";
})

// Changes the pomodoro timer configuration to 50 mins focus and 10 mins rest
document.getElementById("time-50").addEventListener("click", function(){
  pomoMinute = 50;
  pomoMode = "50";
})

var changeBtn = document.querySelector(".change-btn");
changeBtn.addEventListener("click", function(){
  if(changeBtn.textContent == "REST"){
    if (pomoMode == "25"){
        pomoMinute = 5;
    }
    else{
        pomoMinute = 10;
    }
  }
  else {
    if (pomoMode == "25"){
      pomoMinute = 25;
    }
    else{
      pomoMinute = 50;
    }
  }
  postTimerMode()
})

document.getElementById("start-btn").addEventListener("click", function(){
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

      if (time == 0){
        clearInterval(interval);
        if (pomoMode == "25"){
            if (mode == "focus"){
              pomoMinute = 5;
              cycle++;
              postTimerMode();
            }
            else {
              pomoMinute = 25;
              postTimerMode();
            }
          }
        }
        else {
          if (mode == "focus"){
            pomoMinute = 10;
            cycle++;
            postTimerMode();
          }
          else {
            pomoMinute = 50;
            postTimerMode();
          }
        }
        alert("TIME IS UP!");
      }
  }

//Function to identify what mode will occur next
function postTimerMode(){
  if (mode == "focus"){
    mode = "rest";
    document.querySelector(".focus-cycle").textContent = "CYCLE: " + cycle;
    themeIdentifier();
  }
  else {
    mode = "focus";
    themeIdentifier();
  }
}

// Function to identify what theme the system will use
function themeIdentifier(){
  if (theme == "day"){
    theme = "day"
      if (mode == "focus"){
       dayFocus_colors();
      }
      else {
        dayRest_colors();
      }
  }
  else {
    theme = "night"
    if (mode == "focus"){
     nightFocus_colors();
    }
    else {
      nightRest_colors();
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
