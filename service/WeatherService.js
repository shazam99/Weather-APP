import axios from 'axios';

// Importing the API key from environment variables
import { REACT_APP_OPEN_API_KEY } from "@env"

// Assigning the API key to a variable for easier use
const apiKey = REACT_APP_OPEN_API_KEY

// Defining the base URL for the OpenWeather API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// Function to get current weather data for a given city
const getWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL + "weather", {
      params: {
        q: city,
        appid: apiKey
      }
    });
    return response.data; // Returning the data from the response
  } catch (error) {
    throw error; // Throwing an error if there's an issue with the request
  }
};

// Function to get forecast data for a given city
const getForecastData = async (city) => {
  try {
    const response = await axios.get(BASE_URL + "forecast", {
      params: {
        q: city,
        appid: apiKey
      }
    });
    return response.data; // Returning the data from the response
  } catch (error) {
    throw error; // Throwing an error if there's an issue with the request
  }
};

export { getWeatherData, getForecastData };
