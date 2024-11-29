const fetchWeatherAndForecast = async (city, apiKey) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("City not found or API error");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        console.log("Weather Data:", weatherData); 
        console.log("Forecast Data:", forecastData); 

        return { weather: weatherData, forecast: forecastData };
    } catch (error) {
        console.error("Error fetching weather or forecast data:", error);
        return null;
    }
};

export default fetchWeatherAndForecast;
