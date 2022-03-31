var inputEl = document.getElementById("city-name-input")
var currentWeatherEl = document.getElementById("currentWeather")
var buttonEL = document.getElementById("btn")
var fiveForecastEl = document.getElementById("fiveForecast")

buttonEL.addEventListener("click", function (event) {
    event.preventDefault()
    var city = inputEl.value
    console.log(city);
    getLocation(city);
})

function getLocation(city) {
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bbb93c538815e4e4cd4fc3a63e21c97`
    fetch(URL)
        .then(function (result) {
            return result.json()
        }).then(function (apiResults) {
            console.log(apiResults)
            var lat = apiResults.coord.lat
            var long = apiResults.coord.lon
            onecallApi(lat, long)

            var cityName = apiResults.name
            var cityNameEl = document.createElement("p")

            cityNameEl.textContent = `${cityName}`
            currentWeatherEl.appendChild(cityNameEl)

        })
}


function onecallApi(lat, long) {
    var URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=4bbb93c538815e4e4cd4fc3a63e21c97&units=imperial`
    fetch(URL)
        .then(function (result) {
            return result.json()
        }).then(function (apiResults) {
            console.log(apiResults)
            var wind = apiResults.current.wind_speed
            var humid = apiResults.current.humidity
            var temp = apiResults.current.temp

            var windpEl = document.createElement("p")
            var humidpEl = document.createElement("p")
            var tempEl = document.createElement("p")

            windpEl.textContent = `wind speed: ${wind}Mph`
            currentWeatherEl.appendChild(windpEl);
           
            humidpEl.textContent = `Humidity: ${humid}%`
            currentWeatherEl.appendChild(humidpEl);
            
            tempEl.textContent = `Temperature: ${temp}`
            currentWeatherEl.appendChild(tempEl);


        })



}

