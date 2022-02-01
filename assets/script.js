var inputEl = document.getElementById("city-name-input")

var buttonEL = document.getElementById("btn")

buttonEL,addEventListener("click", function(event){
    event.preventDefault()
   var city = inputEl.value 
   console.log(city);
   getLocation(city);
})

function getLocation(city){
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bbb93c538815e4e4cd4fc3a63e21c97`
    fetch(URL)
    .then(function(result){
        return result.json()
    }).then( function(apiresults){
        console.log(apiresults)
        var lat =apiresults.coord.lat
        var long =apiresults.coord.lon
        onecallApi(lat,long)
    })
}


function onecallApi(lat,long) {
    var URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=4bbb93c538815e4e4cd4fc3a63e21c97&units=imperial`
    fetch(URL)
    .then(function(result){
        return result.json()
    }).then( function(apiresults){
        console.log(apiresults)
    })
}

