import React from "react";

export default function WeatherForecast(props) {
  return (
    <div>
      <div
        className="col-sm m-2 p-2 bg-transparent shadow rounded text-center forecast" id="forecast"
        >
        <h5>Sun, Nov 20</h5>
        <img 
          src={props.icon}
          alt={props.description} 
        />
        <h4>
          <span>5</span>°C / 
          <span>4</span>°C
        </h4>
        <p>Clouds</p>
      </div>
    </div>
  )
}