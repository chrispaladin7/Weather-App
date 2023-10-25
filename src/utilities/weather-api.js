// WeatherAPI.js

export async function fetchWeather(city) {

    const API_KEY = '4dc891ac30b0d1c7e1d199a12e89c137';
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
