import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error('EXPO_PUBLIC_WEATHER_API_KEY is not defined. Please check your .env file.');
}

export type WeatherCondition = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado' | 'Clear' | 'Clouds';

export interface WeatherData {
  temperature: number;
  condition: WeatherCondition;
  city: string;
}

const getLocation = async () => {
  try {
    await Location.requestBackgroundPermissionsAsync()
    const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
    return { latitude, longitude };
  } catch (error) {
    Alert.alert("Error", "Unable to get location. Please check your permissions.");
    return null;
  }
}

const getWeather = async (latitude: number, longitude: number): Promise<WeatherData | null> => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&lat=${latitude}&lon=${longitude}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      city: data.name
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    Alert.alert("Error", "Unable to fetch weather data. Please try again later.");
    return null;
  }
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 0,
    condition: "Clear",
    city: ""
  });

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      const coordinates = await getLocation();
      if (coordinates) {
        const weather: WeatherData | null = await getWeather(coordinates.latitude, coordinates.longitude);
        if (weather) {
          setWeatherData(weather);
          setIsLoading(false);
          console.log('====================================');
          console.log(weather);
          console.log('====================================');
        }
      }
    };
    
    fetchLocationAndWeather();
  }, []);

  return (
    isLoading ? <Loading /> :
    <Weather 
      temperature={weatherData.temperature} 
      condition={weatherData.condition} 
      city={weatherData.city}
    />
  );
}

export default App;