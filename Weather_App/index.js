
const weatherForm = document.querySelector(".weatherFrom");
const cityInput = document.getElementById("city");
const card = document.querySelector(".container");
const apiKey = "770f68a32ec3f343902600dc84c45df1";

weatherForm.addEventListener("submit", async event => {
  event.preventDefault(); // -> prevent refreshing the page after submit
  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a city!");
  }
});

async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("Could not fetch the data");
  return response.json();
}

function displayWeatherInfo(data) {

  const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidDisplay.classList.add("humidDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.textContent = "";
  card.style.display = "flex";
  card.prepend(cityDisplay);
  card.append(tempDisplay);
  card.append(humidDisplay);
  card.append(descDisplay);
  card.append(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case (weatherId >= 300 && weatherId < 600):
      return "🌧️";
    case (weatherId >= 600 && weatherId < 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "🌊";
    case (weatherId === 800):
      return "☀️";
    case (weatherId >= 800):
      return "⛅️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

