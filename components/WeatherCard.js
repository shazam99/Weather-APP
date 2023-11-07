import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importing the IconPaths service for mapping weather conditions to icons
import ImagePaths from '../service/iconService';

// Functional component for displaying weather information
const WeatherCard = ({ weatherData }) => {
  // Destructuring properties from the weatherData object
  const { main, weather, name, sys } = weatherData;

  // Calculating temperature in Celsius
  const temperature = main.temp - 273.15;

  // Extracting weather description
  const description = weather[0].description;

  // Extracting country code
  const country = sys.country;

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          style={styles.weatherIcon}
          source={ImagePaths(weather[0].main)}
        />
        <View style={styles.additionalInfo}>
          <Text>Humidity: {main.humidity}%</Text>
          <Text>Pressure: {main.pressure} hPa</Text>
          <Text>Visibility: {weatherData.visibility / 1000} km</Text>
          <Text>Feels Like: {(main.feels_like - 273.15).toFixed(1)}°C</Text>
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.cityName}>{name}, {country}</Text>
        <Text style={styles.temperature}>{temperature.toFixed(1)}°C</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// Styles for the WeatherCard component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'left',
    marginLeft: 10
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  additionalInfo: {
    marginBottom: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
});

export default WeatherCard;
