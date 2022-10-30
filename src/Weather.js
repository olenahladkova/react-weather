import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";

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
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input type="search" className="form-control bg-transparent border shadow text-light search-form" onChange={handleChange} />
          <input type="submit" className="form-control bg-transparent shadow text-light submit-button w-25" value="Search" />
        </form>
        <WeatherInfo temperature={temperature} 
                    city={city} 
                    icon={icon} 
                    description={description} 
                    humidity={humidity} 
                    wind={wind}/>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Choose city" className="search-form form-control bg-transparent border shadow text-light" onChange={handleChange} />
          <input type="submit" className="submit-button form-control bg-transparent shadow text-light w-25" value="Search" />
        </form>
      </div>
    );
  }
}
