




const apiKey = "bb8c08ce3d122770d9091009f5f767e7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searctBox = document.querySelector('.search input');
const searctBtn = document.querySelector('.search button');
const weatherimg = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');





async function checkWeather(city) {
  const response = await fetch( apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    error.style.display = 'block'
    weather.style.display = 'none'
  }
  else{



  var data = await response.json();

document.querySelector('.tem').innerHTML = Math.floor(data.main.temp )+ '°C'
document.querySelector('.city').innerHTML = data.name
document.querySelector('.speed').innerHTML = Math.floor(data.wind.speed )+ ' km/h'
document.querySelector('.humidity').innerHTML = data.main.humidity + '%'


console.log(data);
 if(data.weather[0].main == 'Clear'){
  weatherimg.src = 'clear.png'
 }
 else if(data.weather[0].main == 'Clouds'){
  weatherimg.src = 'clouds.png'
 }
 else if(data.weather[0].main == 'Drizzle'){
  weatherimg.src = 'drizzle.png'
 }
 else if(data.weather[0].main == 'Mist'){
  weatherimg.src = 'mist.png'
 }
 else if(data.weather[0].main == 'Rain'){
  weatherimg.src = 'rain.png'
 }
 else if(data.weather[0].main == 'Snow'){
  weatherimg.src = 'snow.png'
 }





 error.style.display = 'none'
    weather.style.display = 'block'
}
}


searctBtn.addEventListener('click',()=>{
  checkWeather(searctBox.value);
})













