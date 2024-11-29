import React from "react";
import "./ForecastDisplay.css";

const ForecastDisplay = ({ forecastData }) => {
  console.log("Forecast Data in Component:", forecastData); 

  const forecastList = forecastData?.list.slice(0, 5); 

  return (
    <div className="forecast-container">
      <h2>5-Day Prediction</h2>
      <div className="forecast-grid">
        {forecastList.map((forecast, index) => (
          <div className="forecast-box" key={index}>
            <p><strong>Date:</strong> {forecast.dt_txt.split(" ")[0]}</p>
            <p><strong>Time:</strong> {forecast.dt_txt.split(" ")[1]}</p>
            <p><strong>Temp:</strong> {forecast.main.temp}°C</p>
            <p><strong>Weather:</strong> {forecast.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
