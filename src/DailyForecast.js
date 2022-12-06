import React from "react";

export default function DailyForecast(props) {

  function formatDate(timestamp) {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return timestamp.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <h6>{formatDate(new Date(props.data.dt * 1000))}</h6>
      <img 
          src={props.icon}
          alt={props.data.weather[0].description} 
        />
        <h5>
          <span>{Math.round(props.data.temp.max)}</span>°C / 
          <span>{Math.round(props.data.temp.min)}</span>°C
        </h5>
        <p>{props.data.weather[0].description}</p>
    </div>
  )
}