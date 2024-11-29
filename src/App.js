import React, { useState } from "react";
import fetchWeatherAndForecast from "./services/weatherService";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; 

  const handleSearch = async (city) => {
    const data = await fetchWeatherAndForecast(city, API_KEY);
    if (data) {
      setWeatherData(data.weather);
      setForecastData(data.forecast);
      console.log("Forecast Data State:", data.forecast); 
    }
  };
  

  return (
    <div className="app">
      <div className="weather-container">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
        {forecastData && <ForecastDisplay forecastData={forecastData} />}
      </div>
    </div>
  );
};

export default App;
