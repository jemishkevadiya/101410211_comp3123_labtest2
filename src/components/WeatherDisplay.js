import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData }) => {
  const { name, sys, main, weather } = weatherData;

  return (
    <div className="weather-info">
      <h2>
        {name}, {sys.country}
      </h2>
      <div className="weather-boxes">
        <div className="weather-box">
          <p><strong>Temperature:</strong> {main.temp}°C</p>
        </div>
        <div className="weather-box">
          <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
        </div>
        <div className="weather-box">
          <p><strong>Pressure:</strong> {main.pressure} hPa</p>
        </div>
        <div className="weather-box">
          <p><strong>Humidity:</strong> {main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
