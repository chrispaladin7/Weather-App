import WeatherForm from "../../components/WeatherForm/WeatherForm"
import "./WeatherPage.css"
import { fetchWeather } from "../../utilities/seaches-api";
import { useState } from 'react';
import clearIcon from '../../Assets/clear.png';

export default function WeatherPage({ setWeatherData, weatherData }) {
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] = useState('');
    const [location, setLocation] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windspeed, setWindSpeed] = useState('');
    const [wIcon, setWIcon] = useState(clearIcon);
    const [animationImage, setAnimationImage] = useState('');
    // const [searchText, setSearchText] = useState('');
    
    const mapWeatherIcon = (iconCode) => {
        const iconMappings = {
            '01d': 'https://openweathermap.org/img/wn/01d@2x.png',
            '01n': 'https://openweathermap.org/img/wn/01n@2x.png',
            '02d': 'https://openweathermap.org/img/wn/02d@2x.png',
            '02n': 'https://openweathermap.org/img/wn/02n@2x.png',
            '03d': 'https://openweathermap.org/img/wn/03d@2x.png',
            '03n': 'https://openweathermap.org/img/wn/03n@2x.png',
            '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
            '04n': 'https://openweathermap.org/img/wn/04n@2x.png',
            '09d': 'https://openweathermap.org/img/wn/09d@2x.png',
            '09n': 'https://openweathermap.org/img/wn/09n@2x.png',
            '10d': 'https://openweathermap.org/img/wn/10d@2x.png',
            '10n': 'https://openweathermap.org/img/wn/10n@2x.png',
            '11d': 'https://openweathermap.org/img/wn/11d@2x.png',
            '11n': 'https://openweathermap.org/img/wn/11n@2x.png',
            '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
            '13n': 'https://openweathermap.org/img/wn/13n@2x.png',
            '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
            '50n': 'https://openweathermap.org/img/wn/50n@2x.png',
        };

        return iconMappings[iconCode] || clearIcon;
    };

    async function handleSearch(searchText) {
        try {
            const data = await fetchWeather(searchText);
            setWeatherData(data);
            setAnimationImage('');
            setLocation(`${data.name}`.toUpperCase());
            setHumidity(`${data.main.humidity} %`);
            setDescription(data.weather[0].main);
            setTemperature(`${Math.floor(data.main.temp)} °F`);
            setWindSpeed(`${data.wind.speed} km/h`);
            setWIcon(mapWeatherIcon(data?.weather[0]?.icon));
            setAnimationImage('animate__animated animate__fadeInUp');


        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    return (
        <div>
            <br />
            <WeatherForm
                handleSearch={handleSearch}
                weatherData={weatherData}
                location={location}
                description={description}
                temperature={temperature}
                humidity={humidity}
                windspeed={windspeed}
                animationImage={animationImage}
                weatherIcon={wIcon}
            />
        </div>
    );
}