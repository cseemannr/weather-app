let formCityEl = document.querySelector("#form-city");
let headingEl = document.querySelector("h1");
let inputEl = document.querySelector(".form-text-input");
let showTimeEl = document.querySelector(".current-info p");
let warningEl = document.querySelector(".current-warning");
let temperatureEl = document.querySelector(".current-temperature-value");
let fahrenheitEl = document.querySelector("#current-temperature-fahrenheit");
let celciusEl = document.querySelector("#current-temperature-celcius");

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let currentDay = daysOfWeek[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentTemp = 32;

function randomizer() {
  return Math.floor(Math.random() * 36);
}

function setTemperature() {
  return (currentTemp = randomizer());
}

function showTime() {
  showTimeEl.innerHTML = `${currentDay}, ${currentHours}:${currentMinutes}`;
}
showTime();

function generateData(event) {
  event.preventDefault();
  if (inputEl.value) {
    let value =
      inputEl.value[0].toUpperCase() + inputEl.value.slice(1).toLowerCase();
    headingEl.innerHTML = value;
    temperatureEl.innerHTML = `${setTemperature()}<span class="temperature-symbol">ºC</span>`;
    inputEl.value = null;

    if (currentTemp > 10 && currentTemp < 24) {
      warningEl.innerHTML = `Have a great day! ☺`;
    } else if (currentTemp > 24) {
      warningEl.innerHTML = `High temperature warning 🌡`;
    } else {
      warningEl.innerHTML = `Low temperature warning ❄`;
    }
  } else {
    alert("Please, search for a city.");
  }
}

formCityEl.addEventListener("submit", generateData);

fahrenheitEl.addEventListener("click", function () {
  temperatureEl.innerHTML = `${Math.round(
    (currentTemp * 9) / 5 + 32
  )}<span class="temperature-symbol">ºF</span>`;
});

celciusEl.addEventListener("click", function () {
  temperatureEl.innerHTML = `${currentTemp}<span class="temperature-symbol">ºC</span>`;
});
