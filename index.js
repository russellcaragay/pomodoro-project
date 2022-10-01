// STARTED: SEPTEMBER 13, 2022
var documentStyle = document.documentElement.style;

var hours = new Date().getHours();
var mode = "focus";
var cycle = 0;

//Initialization of sounds
var alarmSound = "on";
var alarm = new Audio("sound/alarm.mp3");

// Variables for creating tasks for the todo list
var list = document.getElementById("taskList");
var taskInput = document.getElementById("newTask");

// system will automatically change the theme
if (hours >= 6 && hours <= 18){
  var theme = "day";
    dayFocus_colors()
}

else{
  var theme = "night";
    nightFocus_colors()
}

// Countdown
var pomoMinute = 50;
var pomoMode = "50";

//List of motivational quotes
var quoteblock = [
  "Experience is the name everyone gives to their mistakes",
  "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
  "Allow Yourself To Be A Beginner, No One Starts Off Being Excellent",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Measuring programming progree by lines of code is like measuring aircraft building progree by weight.",
  "People don't care about what you say, they care about what you build.",
  "If you optimize everything, you will always be unhappy.",
  "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
  "Everyday life is like programming, I guess.If you love something you can put beauty on it.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live"
]

//authors of motivational quotes
var author = [
  "Oscar Wilde",
  "Antoine de Saint-Exupery",
  "Wendy Flynn",
  "Dan Salomon",
  "Bill Gates",
  "Mark Zuckerberg",
  "Donald Knuth",
  "Seymour Cray",
  "Donald Knuth",
  "John Woods"
]

//-----Event Listeners-----
//Event Listener for adding new task
document.getElementById("append-btn").addEventListener("click", function(){

  if(taskInput.value == '' || taskInput.value == ' '){
    alert("No task input!");
    return;
  }

  var newDiv = document.createElement('div')
  newDiv.classList.add("task-container");

  // For Task Labels
  var newInput = document.createElement("input")
  newInput.setAttribute("type", "checkbox");

  var newParagraph = document.createElement('p');
  newParagraph.classList.add("task-name");
  newParagraph.innerText = taskInput.value;

  var newLabel = document.createElement('label');
  newLabel.append(newInput, newParagraph);

  //For Action Icons
  var newIcon = document.createElement('i')
  newIcon.classList.add("fa-solid", "fa-circle-minus" , "remove-icon");

  var taskButton = document.createElement('button');
  taskButton.classList.add("remove-btn");
  taskButton.appendChild(newIcon);

  newDiv.append(newLabel,taskButton);

  list.appendChild(newDiv);

  taskInput.value = " ";
})

// Event Listener for Delete Button
list.addEventListener('click', function(e){
  if(e.target.classList.contains('fa-solid')){
    e.target.parentElement.parentElement.remove();
  }
})

// Event Listener to change theme
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

// Changes the pomodoro timer configuration to 25 mins focus and 5 mins rest
document.getElementById("time-25").addEventListener("click", function(){
  pomoMinute = 25;
  pomoMode = "25";
  document.getElementById('time').innerHTML =  `${pomoMinute}:${"00"}`;
})

// Changes the pomodoro timer configuration to 50 mins focus and 10 mins rest
document.getElementById("time-50").addEventListener("click", function(){
  pomoMinute = 50;
  pomoMode = "50";
  document.getElementById('time').innerHTML =  `${pomoMinute}:${"00"}`;
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

// Event listener to start the timer
document.getElementById("start-btn").addEventListener("click", function(){
  let timer = pomoMinute*60;
  document.getElementById("start-btn").disabled = true; 
  document.querySelectorAll(".timer-btn")[0].disabled = true; 
  document.querySelectorAll(".timer-btn")[1].disabled = true; 
  document.querySelectorAll(".timer-btn")[2].disabled = true; 
  document.getElementById("start-btn").classList.add("start-effect");
  setTimeout(function() {
    document.getElementById("start-btn").classList.remove("start-effect");
  }, 100);
  alarm.pause();
  startTime(timer);
})

//Function for timer
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

    if (time < 0){
      document.getElementById('time').innerHTML =  "TIME IS UP!";
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
      clearInterval(interval);
      alarm.loop = true;
      alarm.play();
      alert("Time is Up!");
      setTimeout(function() {
        alarm.pause();
      }, 8000);
      alarm.pause();
      document.getElementById("start-btn").disabled = false; 
      document.querySelectorAll(".timer-btn")[0].disabled = false; 
      document.querySelectorAll(".timer-btn")[1].disabled = false; 
      document.querySelectorAll(".timer-btn")[2].disabled = false; 
    }
  }
}

//Function to identify what mode will occur next
function postTimerMode(){
  document.getElementById('time').innerHTML =  `${pomoMinute}:${"00"}`;
  alarm.pause();
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
//Function to get random quote
function quotation(){
  var randomNumber = Math.floor(Math.random()*10);
  document.getElementById("quote").textContent = quoteblock[randomNumber];
  document.getElementById("author").textContent = author[randomNumber];
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
    document.querySelectorAll(".timeBtn")[0].classList.remove("hide-btn");
    document.querySelectorAll(".timeBtn")[1].classList.remove("hide-btn");
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
    document.querySelectorAll(".timeBtn")[0].classList.add("hide-btn");
    document.querySelectorAll(".timeBtn")[1].classList.add("hide-btn");


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
    document.querySelectorAll(".timeBtn")[0].classList.remove("hide-btn");
    document.querySelectorAll(".timeBtn")[1].classList.remove("hide-btn");
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
    document.querySelectorAll(".timeBtn")[0].classList.add("hide-btn");
    document.querySelectorAll(".timeBtn")[1].classList.add("hide-btn");
}
