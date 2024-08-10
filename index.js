import express from 'express';
const across = express();
import axios  from 'axios';

const API_KEY = '82cf97dcd081e7603e730fbe4c099cbf';
const CITY = 'London'; // You can change this to any city

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' // Use 'imperial' for Fahrenheit
            }
        });

        const { temp, humidity } = response.data.main;
        const { description } = response.data.weather[0];
        const { speed } = response.data.wind;

        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${temp}°C`);
        console.log(`Humidity: ${humidity}%`);
        console.log(`Description: ${description}`);
        console.log(`Wind Speed: ${speed*3.6} km/s`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Fetch weather data for the specified city
getWeatherData(CITY);