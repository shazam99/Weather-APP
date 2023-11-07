import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// Importing functions for fetching weather data from WeatherService
import { getForecastData, getWeatherData } from "./service/WeatherService";

// Importing custom components
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import SearchComponent from "./components/SearchComponent";

const App = () => {
  // State variables for weather and forecast data, error message, and loading state
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle search for weather data and forecast
  const handleSearch = async (city) => {
    setIsLoading(true);

    try {
      const wData = await getWeatherData(city);
      setWeatherData(wData);
      setWeatherError(null);
    } catch (error) {
      setWeatherData(null);
      setWeatherError("City Not found with name: " + city);
    }

    try {
      const fData = await getForecastData(city);
      setForecastData(fData);
    } catch (error) {
      setForecastData(null);
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <SearchComponent onSearch={handleSearch} />
      {!isLoading && (
        <>
          {weatherError && <Text style={styles.errorText}>{weatherError}</Text>}
          {weatherData && <WeatherCard weatherData={weatherData} />}
          {forecastData && <ForecastList forecastData={forecastData} />}
          {!weatherData && !weatherError && (
            <Text style={styles.emptyState}>Please enter a city to search for weather</Text>
          )}
        </>
      )}
      {isLoading && <Text style={styles.emptyState}>Loading...</Text>}
    </View>

  );
};

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  emptyState: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default App;
