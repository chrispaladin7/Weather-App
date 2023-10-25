import WeatherForm from "../../components/WeatherForm/WeatherForm"
import "./WeatherPage.css"
import { fetchWeather } from "../../utilities/seaches-api";
import { useState } from 'react';
import humidityIcon from '../../Assets/humidity.png';
import windIcon from '../../Assets/wind.png';
import clearIcon from '../../Assets/clear.png';

export default function WeatherPage( { setWeatherData,weatherData } ){
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] = useState('');
    const [location, setLocation] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windspeed, setWindSpeed] = useState('');

    async function handleSearch(searchText) {
        try {
            // setAnimationImage('');
            const data = await fetchWeather(searchText);
            setWeatherData(data);
            setLocation(data.name);
            setHumidity(data.main.humidity);
            // setSearchText('');
            // setWIcon(mapWeatherIcon(data?.weather[0]?.icon));

            // setAnimationImage('animate__animated animate__fadeInUp');


        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    return (
      <div>
        <WeatherForm 
        handleSearch={handleSearch}
        weatherData={weatherData}
        location={location}
        description={description}
        temperature={temperature}
        humidity={humidity}
        windspeed={windspeed}
        />
      </div>  
    );
}