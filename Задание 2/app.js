document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=479561&appid=e76908f3e86f1fcdda95d3d99fbf00ad&units=metric').then(resp => resp.json()).then(data => {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name.toUpperCase();
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;`;
        document.querySelector('.weather').innerHTML = data.weather[0]['description'][0].toUpperCase() + data.weather[0]['description'].slice(1, length - 1);
        //http://openweathermap.org/img/wn/10d@2x.png
        document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"/>`;
        document.querySelector('.hi-low').innerHTML = `Max/Min: ${Math.round(data.main.temp_max)}&deg;/${Math.round(data.main.temp_min)}&deg;`;
    });
});