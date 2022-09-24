import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState();
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [icon, setIcon] = useState();

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79d53fa7da0455b822f6b2e41dca7be8&units=metric`;

    event.preventDefault();
    if (!city) {
      alert("Type the city");
    } else axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (city) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleChange} />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
