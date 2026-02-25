const apiKey = "4273d25b468707d27e77409403d1d50c";
const getWeatherBtn = document.getElementById("getWeather");

getWeatherBtn.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} km/h`;

    const weatherIcon = document.getElementById("weatherIcon");
    const weatherMain = data.weather[0].main;

    if (weatherMain === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherMain === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherMain === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherMain === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherMain === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (weatherMain === "Snow") {
      weatherIcon.src = "images/snow.png";
    } else {
      weatherIcon.src = "images/clear.png"; // default image
    }

  } catch (error) {
    alert("Something went wrong. Check internet or API key.");
    console.log(error);
  }
});

