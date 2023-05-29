import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");

  const fetchWeatherData = () => {
    axios
      .get(`http://localhost:3500/${location}`)
      .then((response) => {
        setWeatherData(response.data);
        setError("");
        setLocation('');
      })
      .catch((error) => {
        setError("Error fetching weather data, Please try again later");
        setWeatherData("");
      });
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocation}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div>
          <h3>Weather Information for {weatherData.location}</h3>
          <p>Temperature {weatherData.temp}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
