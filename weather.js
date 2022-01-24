const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "dfd89b5cdf2c86abb1d06feb3c534310";

function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        city.innerText = `WEATHER : ${data.weather[0].main} TEMP : ${data.main.temp}`;
    })
    
}

function onGeoError() {
    alert("?");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)