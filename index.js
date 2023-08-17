const fetchApi = async () => {
  const cityInput = document.querySelector("#cityInput").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=547ec68f6b1573234ea119980196495d&units=metric`
  );
  const data = await response.json();
  console.log(data);

  const climaCard = document.createElement("div");
  climaCard.className = "card";

  const climaCity = document.createElement("h2");
  climaCity.textContent = `Ciudad: ${data.city.name}, ${data.city.country}`;

  const climaTemperature = document.createElement("p");
  climaTemperature.textContent = `Temperatura: ${data.list[0].main.temp}°C`;

  const climaCondition = document.createElement("p");
  climaCondition.textContent = `Condición: ${data.list[0].weather[0].description}`;

  const climaFeels = document.createElement("p");
  climaFeels.textContent = `Sensacion: ${data.list[0].main.feels_like}°C`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humedad: ${data.list[0].main.humidity}%`;

  const climaIcon = document.createElement("img");
  const iconCode = data.list[0].weather[0].icon;
  climaIcon.src = `http://openweathermap.org/img/w/${iconCode}.png`;

  const cardContainer = document.querySelector("#card-container");

  climaCard.appendChild(climaCity);
  climaCard.appendChild(climaIcon);
  climaCard.appendChild(climaTemperature);
  climaCard.appendChild(climaFeels);
  climaCard.appendChild(humidity);
  climaCard.appendChild(climaCondition);

  cardContainer.innerHTML = "";
  cardContainer.appendChild(climaCard);
};

const fetchButton = document.querySelector("#fetchButton");
fetchButton.addEventListener("click", fetchApi);
const cityInput = document.querySelector("#cityInput");
cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    fetchApi();
  }
});
