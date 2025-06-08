const apiKey = "a6c038be976096e9b879c761d069e0db"; // 🔐 Replace this!

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const display = document.getElementById("weatherDisplay");
  const errorMsg = document.getElementById("error");

  if (!city) {
    errorMsg.textContent = "Please enter a city name!";
    display.classList.add("hidden");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    errorMsg.textContent = "";
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = `🌡️ Temp: ${data.main.temp} °C`;
    document.getElementById("description").textContent = `☁️ ${data.weather[0].description}`;
    
    display.classList.remove("hidden");
  } catch (err) {
    display.classList.add("hidden");
    errorMsg.textContent = `Error: ${err.message}`;
  }
}
