
async function getweather(city){
    const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=bef7447c9b074da7b8960059220709&q=${city}&aqi=yes`);
    const data= await response.json();
    return data;
}
function processWeather(data){
    let temperature = data.current.temp_c;
    let temperature2 = data.current.temp_f;
    temperatureElement.innerHTML = temperature;
    
    let humidity = data.current.humidity;
    humidityElement.innerHTML = `humidity: ${humidity}`;
    
    let wind = data.current.wind_kph;
    windElement.innerHTML = `wind: ${wind} km/h`;
    
    let cloud = data.current.cloud;
    cloudElement.innerHTML = `cloud: ${cloud}`;
 
    let location = data.location.name;
    locationElement.innerHTML = location;

    let text = data.current.condition.text;
    textElement.innerHTML = text;

    let image = data.current.condition.icon;
    imageElement.innerHTML =image;

    let celsiusbutton = document.querySelector('.celsius');  
    celsiusbutton.addEventListener( 'click' ,()=>{
      console.log('celcius');
      temperatureElement.innerHTML = `${data.current.temp_c}&deg;C`;
  });
  //   conversion('celsius') );
    let fahrenheitbutton = document.querySelector('.fahrenheit');
    fahrenheitbutton.addEventListener( 'click' ,()=>{
      temperatureElement.innerHTML = `${data.current.temp_f}&deg;F`;
  });
}
async function api(city){
    const data = await getweather(city);
    const processedData = processWeather(data);
}
api('hyderabad');

let temperatureElement = document.querySelector('.temperature b');
let humidityElement = document.querySelector('.first-block');
let windElement = document.querySelector('.second-block');
let cloudElement = document.querySelector('.third-block');
let locationElement = document.querySelector('.location h2');
let textElement = document.querySelector('.location p');
let celsius = document.querySelector('.celsius');
let fahrenheit = document.querySelector('.fahrenheit');
let searchbar = document.querySelector('.searchbox');
let submit = document.querySelector('.search');
let imageElement = document.querySelector('.image');

submit.addEventListener('click' , function(){
    api(searchbar.value);
})

