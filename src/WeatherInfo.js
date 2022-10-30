import React from "react";

import "./WeatherInfo.css"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {

  return (
    <div className="WeatherInfo">
      <div className="row d-flex justify-content-around p-2">
        <div className="col-sm-6">
          <h1>{props.city}</h1>
          <p>{props.date}</p>
          <WeatherTemperature celsius={props.temperature}/>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <img src={props.icon} alt={props.description} />
            </li>
            <li><em>{props.description}</em></li>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}