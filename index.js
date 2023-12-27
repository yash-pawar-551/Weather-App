    const apiKey = "a8ea820edb7bce182ec4a305e32c4c87";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".searchBar input");
    const searchBtn = document.querySelector(".searchBar button");
    const weatherIcon = document.querySelector(".weatherIcon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}` );

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clear" ) {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
        
    }   

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })