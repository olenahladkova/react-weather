import React from "react";

import "./WeatherInfo.css"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row d-flex justify-content-around p-2">
        <div className="col-sm-6">
          <h1>{props.city}</h1>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              <img src={props.icon} alt={props.description} />
            </li>
            <li>Temperature: {Math.round(props.temperature)}°C</li>
            <li>Description: {props.description}</li>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}