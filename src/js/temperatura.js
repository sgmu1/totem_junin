const myKey     = 'fc1cb42b19c8796166537a44982074e4';
const idPosadas = '3429886';
const units     = 'metric';
const idioma    = 'es';

function obtenerTemperatura(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=${units}&id=${idPosadas}&appid=${myKey}&lang=${idioma}`)
        .then(res => res.json())
        .then(data => setTemperatura(data))

}

function setTemperatura(data){


    const description   = data.weather[0].description
    const humedad       = data.main.humidity + '%'
    const temp          = Math.round(data.main.temp) + '°C'
    const feels_like    = Math.round(data.main.feels_like) + '°C'

    const icon      = data.weather[0].icon;
    const myimg     = document.getElementById('myTemp');
    
    myimg.innerHTML = `
        <img id="myImg" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">      
        
        <h5> ${description} </h5>
        <h2> ${temp}        </h2>
        <h6>Hum ${humedad} ST ${feels_like}</h6>
    `          
    
    console.log(data)
}

$(document).ready(function () {
    obtenerTemperatura();
    setInterval(obtenerTemperatura,90000);
});






































/*
const onLoad = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=${units}&id=${idPosadas}&appid=${myKey}`)
        .then(res => res.json())
        .then(data => setTemperatura(data))

}    
function setTemperatura(data){
    const infoTemperature = {
        /main:           data.weather[0].main,
        description:    data.weather[0].description,
        humedad:        data.main.humidity + '%',
        temp:           Math.round(data.main.temp) + '°C',
        feels_like:     Math.round(data.main.feels_like) + '°C'
    }

    Object.keys(infoTemperature).forEach(key => {
        document.getElementById(key).textContent = infoTemperature[key] 
    });   
}
*/