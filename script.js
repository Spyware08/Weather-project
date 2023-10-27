let container = document.getElementById("container")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6eca14ade1msh3ce51bb17021d86p12d3d7jsn5d2f2b9a6bbe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}
let inputweather = (city) => {
    cityname.innerHTML = city.toUpperCase();

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp + "&deg;C"
            min_temp.innerHTML = response.min_temp + "&deg;C"
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp + "&deg C"
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            if (response.cloud_pct > 50) {
                container.style.backgroundImage = "url('rain.jpg')";
            }
            if (response.temp < 15) {
                container.style.backgroundImage = "url('snow.jpg')";
            }
            if (response.temp > 15) {
                container.style.backgroundImage = "url('summer.jpg')";
            }
        })
        .catch(err => console.log(err))
}
sbmt.addEventListener("click", (e) => {
    e.preventDefault()
    inputweather(searchinpt.value)
})
inputweather("Dehli")



