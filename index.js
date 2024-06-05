// "use strict";

// VARIABLES STARTED

let baseURL = "https://api.weatherapi.com/v1";
let city = "Toshkent";
let gradus = document.querySelector('.haa');
let feels = document.querySelector('.gradus')
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let day = document.querySelector('.day');
let month = document.querySelector('.month');
let search = document.querySelector('.search');
let conditionImg = document.querySelector('.condition-img');
let textCondition = document.querySelector('.text-condition');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let pressure = document.querySelector('.pressure');
let uv = document.querySelector('.uv');
let darkBtn = document.querySelector('.bx-toggle-left');
let body = document.querySelector('body');
let infoSection = document.querySelector('.information-section');
let shadox = document.querySelectorAll('.shadox');
let weather = document.querySelectorAll('.weather');

// VARIABLES ENDED





// AYSNC FUNCTION TO RUN API AUTOMATICALLY STARTED

(async function(){
    let res = await fetch(`${baseURL}/current.json?key=f461bacbe2684cecbb8234702240303&q=${city}`);
    let data = await res.json();
    renderCurrentData(data);
    
})();

// AYSNC FUNCTION TO RUN API AUTOMATICALLY ENDED





// RENDER DATA STARTED

function renderCurrentData(data23){
    gradus.textContent=data23.current.temp_f;
    feels.textContent=data23.current.feelslike_f;
    textCondition.textContent=data23.current.condition.text;
    conditionImg.innerHTML = `<img src='${data23.current.condition.icon}' alt="${data23.current.condition.text}" class="relative bottom-[25px] w-[150px]">`;
    humidity.textContent =data23.current.humidity;
    wind.textContent = data23.current.wind_kph;
    pressure.textContent = data23.current.pressure_mb;
    uv.textContent = data23.current.uv;
}


// RENDER DATA ENDED





// GET TIME FUNCTION STARTED

function getTime(){
    let now = new Date();
    let hour2 = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minute2 = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    hour.textContent = hour2;
    minute.textContent = minute2;
}

setInterval(()=>{
    getTime()
},100)


// GET TIME FUNCTION ENDED







// GET WEEK AND DATE STARTED

function week(){
    let weeks = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

let monthArray = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

let now23 = new Date()

let day2 = now23.getDate() < 10 ? '0' + now23.getDate() : now23.getDate();
let month2 = now23.getMonth()

month.textContent = `${monthArray[month2]}`;
day.textContent = day2;

}

week()


// GET WEEK AND DATE ENDED

// SEARCH PROCESSING STARTED


search.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        console.log(e.target.value);
    }
})

// SEARCH PROCESSING ENDED



// DARK MODE STARTED

darkBtn.addEventListener('click',(e)=>{
    body.classList.toggle('light-mode');
    infoSection.classList.toggle('inforbloger');
    shadox.forEach((el)=>{
        el.classList.toggle('card-light');
    })
    weather.forEach((el)=>{
        el.classList.toggle('weather-light');
    })
})

// DARK MODE ENDED