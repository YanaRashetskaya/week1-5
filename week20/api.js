
document.addEventListener ("DOMContentLoaded", function 
(event) {
    getWeather();
});

function  getWeather(){
    let city = document.getElementById('searchCity').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=c34567eb30db0fabf3b0cdfcef1067d1&units=metric')
    .then(response => response.json())
    .then (weather => {
        console.log (weather);
        document.querySelector('.city').innerHTML = weather.name;
        document.querySelector('.temp')
        .innerText = Math.round( weather.main.temp);
        document.querySelector('.hi-low').innerText = 
        Math.round( weather.main.temp_max) + "/" + Math.round( weather.main.temp_min);
        document.querySelector('.weather').innerText = weather.weather[0].description; 
});

}