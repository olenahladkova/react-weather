import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast"

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [icon, setIcon] = useState(null)
  function handleResponse(response) {
    setForecast(response.data.daily);
    setIcon(`http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`);
    setLoaded(true);
  }

  function load() {
    const apiKey = '79d53fa7da0455b822f6b2e41dca7be8'
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates])

  if(loaded) {
    return (
      <div className="row">
        {forecast.map(function(dailyForecast, index) {
          if (index < 4) {
            return (
                <div
                  className="col-sm m-2 p-2 bg-transparent shadow rounded text-center forecast" id="forecast" key={index}
                >
                  <DailyForecast data={dailyForecast}
                                icon={icon} />
                </div>
              );
          } else {
            return null;
          }
        })}
      </div>
    )
  } else {
    load();
  }
}