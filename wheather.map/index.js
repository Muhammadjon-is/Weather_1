const apiKey = '356befec72bb529a6e3de0bc3a66098d';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const mapUrl = 'api.openweathermap.org/data/2.5/weather?';
 const form = document.querySelector(".inputForm");

 form.addEventListener('submit', submit);

 function submit(e){
     e.preventDefault()
     const city  = document.querySelector('.formCity').value
     fetchWeatherDate(city)
 }

 async function fetchWeatherDate(city){
    const apiResponse = await fetch(`${baseUrl}q=${city}&units=metric&APPID=${apiKey}`)
    const weatherDate = apiResponse.json()
    weatherDate.then(date=>{
        document.querySelector('.city').textContent = date.name
        document.querySelector('.country').textContent = `, ${date.sys.country}`
        document.querySelector('.temprature').textContent = `Temperature:  ${Math.round(date.main.temp)} C°`
        document.querySelector('.feelsLike').textContent = `Feels like: ${Math.round(date.main.feels_like)} C°`
        document.querySelector('.sky').textContent = `Sky: ` + date.weather[0].main
        document.querySelector('.min-max').textContent = ` Min: ${Math.round(date.main.temp_min)} C° / Max: ${Math.round(date.main.temp_max)}`
        document.querySelector('.humidity').textContent =` humidity ${Math.round(date.main.humidity)} %  `
        fetchMap(city)
    })
 }

 async function fetchMap(city){
 
    const mapResponse = await fetch(`${mapUrl}q=${city}&APPID=${apiKey}`)
    const cityMap = mapResponse.json()
    document.querySelector('.map').innerHTML = city  
}



 document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherDate("Poznan")
 })