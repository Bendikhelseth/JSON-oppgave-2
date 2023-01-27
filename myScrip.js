const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    const by = document.querySelector(".input1")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${by.value},no&units=metric&lang=no&appid=12d8d386e0bbd442057174c44ade39bd`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".textPlace").innerHTML = data.name
            document.querySelector(".graderPlace").innerHTML = (data.main.temp + " C°")
            document.querySelector(".titlePlace").innerHTML = data.weather[0].description
            var res = (data.main.temp_max + " / " + data.main.temp_min);
            document.querySelector(".minMax").innerHTML = res;
            console.log(data)
        })  
})