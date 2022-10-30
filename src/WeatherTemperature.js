import React, { useState } from "react";

import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');

  function showFarenheith(event) {
    event.preventDefault();
    setUnit('farenheith')
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius')
  }

  function farenheith() {
    return (props.celsius * 9) / 5 + 32;
  }
  if(unit === 'celsius') {
    return (
      <h2 className="WeatherTemperature">
        {Math.round(props.celsius)}
        <span className="units"> °C  |  
          <a href="/" onClick={showFarenheith}>°F</a>
        </span>
      </h2>
    )} else {
      return (
        <h2 className="WeatherTemperature">
          {Math.round(farenheith())}
          <span className="units"> 
          <a href="/" onClick={showCelsius}>°C </a> |  
            °F
          </span>
        </h2>
      )
    }
}