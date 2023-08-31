const apiKey = "f40513bb59b0e052e4a6d2ca062f2e17"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchbar = document.querySelector(".search input")

const searchButton = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 400){
        document.querySelector(".error").style.display = "block"
         document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        let weather = data.weather[0].main.toLowerCase();

        if (weather == "clouds"){
            weatherIcon.src = "assets/clouds.png";
        } else if (weather == "clear") {
            weatherIcon.src = "assets/clear.png";
        } else if (weather == "rain") {
            weatherIcon.src = "assets/rain.png";
        } else if (weather == "drizzle") {
            weatherIcon.src = "assets/drizzle.png";
        } else if (weather == "mist") {
            weatherIcon.src = "assets/mist.png";
        } else {
            console.log("Unexpected weather condition: " + weather);
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none" 

    }

   
}


searchButton.addEventListener("click", () => {
    checkWeather(searchbar.value)
})







// const searchbar = document.querySelector(".search input")
// const searchbtn = document.querySelector(".search button")
// const weatherIcon = document.querySelector(".weather-icon")

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//     if (response.status == 404){
//         document.querySelector(".error").style.display = "block" 
//         document.querySelector(".weather").style.display = "none" 
//     } else {
//         var data = await response.json()
//         console.log(data);
    
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
//         let weather = data.weather[0].main.toLowerCase();
    
//         if (weather == "clouds"){
//             weatherIcon.src = "assets/clouds.png";
//         } else if (weather == "clear") {
//             weatherIcon.src = "assets/clear.png";
//         } else if (weather == "rain") {
//             weatherIcon.src = "assets/rain.png";
//         } else if (weather == "drizzle") {
//             weatherIcon.src = "assets/drizzle.png";
//         } else if (weather == "mist") {
//             weatherIcon.src = "assets/mist.png";
//         } else {
//             console.log("Unexpected weather condition: " + weather);
//         }
    
//         document.querySelector(".weather").style.display = "block"
//         document.querySelector(".error").style.display = "none" 
//     }


    
// }


// searchbtn.addEventListener("click", () => {
//     checkWeather(searchbar.value);
// })

