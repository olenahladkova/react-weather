import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState();

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79d53fa7da0455b822f6b2e41dca7be8&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: response.data.dt,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    })
  }

  function formatDate(timestamp) {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return timestamp.toLocaleDateString("en-US", options);
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input type="search" className="form-control bg-transparent border shadow text-light search-form" onChange={handleChange} />
          <input type="submit" className="form-control bg-transparent shadow text-light submit-button w-25" value="Search" />
        </form>
        <WeatherInfo temperature={weatherData.temperature} 
                    city={weatherData.city} 
                    icon={weatherData.icon} 
                    description={weatherData.description} 
                    humidity={weatherData.humidity} 
                    wind={weatherData.wind}
                    date={formatDate(new Date(weatherData.date * 1000))}/>
        <WeatherForecast icon={weatherData.icon}
                         description={weatherData.description} />
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
