const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '62f69baf1df7e8cd48c807f7b4b627b7';

function renderWeather(weather) {
    var resultsContainer = document.querySelector('#wether-results');
    var city = document.createElement("h2");
    city.textContent = weather.name;
    
    resultsContainer.append(city);

    var temp = document.createElement('p');
    temp.textContent = 'Temp: ' + (weather.main.temp - 273.15).toFixed(2) + '°C'; 
    resultsContainer.append(temp);

    var humidity = document.createElement('p');
    humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
    resultsContainer.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "Wind: " + weather.wind.speed + " mph, Direction: " + weather.wind.deg + "°";
    resultsContainer.append(wind);
}

function fetchWeather() {
    var url = baseUrl + 'weather?lat=44.34&lon=10.99&appid=' + apiKey;
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data)) 
        .catch((error) => console.log(error));
}

fetchWeather();
