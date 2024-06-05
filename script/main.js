const $searchForm = document.querySelector("#search-form");
const $searchInput = document.querySelector("#search-input")
const $weatherImg = document.querySelector("#weather-img");
const $weatherIndicator = document.querySelector("#weather-indicator")
const $weatherLocation = document.querySelector("#weather-location")
const $heroContentTime = document.querySelector("#hero-content-time")
const $weatherWater = document.querySelector("#water")
const $weatherUV = document.querySelector("#uv")
const $weatherSunset = document.querySelector("#sunset")
const $weatherSunrise = document.querySelector("#sunrise")
const $airPressure = document.querySelector("#air-pressure")
const $map = document.querySelector("#map");
const $arrow = document.querySelector(".arrow")
const $header = document.querySelector("#header")


// API KEY
const API_KEY = "644f6ce0ca9e401ebb891832211707";


const renderData = (data) => {
    console.log(data);
    $weatherImg.src = "https:" + data.current.condition.icon;
    $weatherIndicator.innerText = data.current.temp_c + "°";
    $weatherLocation.innerText = `${data.location.name}, ${data.location.country}`;
    $heroContentTime.innerText = data.forecast.forecastday[0].astro.sunset;
    $weatherWater.innerText = data.current.humidity + "%";
    $weatherUV.innerText = data.current.uv + " out of 10"
    $weatherSunset.innerText = data.forecast.forecastday[0].astro.sunset;
    $weatherSunrise.innerText = data.forecast.forecastday[0].astro.sunrise;
    $airPressure.innerText = data.current.pressure_mb + "Pa";
    $arrow.style.transform = `rotate(${data.current.wind_degree}deg)`

    



}

const loadData = (city) =>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`)
        .then((response) => response.json())
        .then(data => {
            renderData(data);
            updateMap(data.location.lat, data.location.lon); // Update map with new coordinates
        });
}

const updateMap = (lat, lon) => {
    $map.src = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=30&output=embed`;
}

loadData("Jizzax")

const searchCityWeather = (e) => {
    e.preventDefault()
    loadData($searchInput.value)
     $searchInput.value = ""
}

// eventlisteners
$searchForm.addEventListener("submit" , searchCityWeather )

const $checkbox = document.querySelector("#theme");

// Event listener for checkbox change
$checkbox.addEventListener("change", function() {
    if (this.checked) {
        // Checkbox is checked, set background color to black
        document.body.style.backgroundColor = "#4f4169";
    } else {
        // Checkbox is not checked, set background color to white
        document.body.style.backgroundColor = "white";
    }
});



