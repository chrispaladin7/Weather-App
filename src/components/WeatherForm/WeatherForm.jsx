import './WeatherForm.css';
import searchIcon from '../../Assets/search.png';
import humidityIcon from '../../Assets/humidity.png';
import windIcon from '../../Assets/wind.png';
import clearIcon from '../../Assets/clear.png';
import { useState } from 'react';
import 'animate.css';
import { fetchWeather } from '../../utilities/weather-api';
import WeatherDetailModal from '../WeatherDetail/WeatherDetailModal';

export default function WeatherForm() {
    const [searchText, setSearchText] = useState('');
    const [wIcon, setWIcon] = useState(clearIcon);
    const [animationImage, setAnimationImage] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [openWeatherModal, setWeatherModal] = useState(false);

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

    const temperature = document.getElementsByClassName('weather-temp');
    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('windspeed-score');
    const location = document.getElementsByClassName('weather-location');
    const description = document.getElementsByClassName('weather-description');



    async function handleSearch() {
        try {
            setAnimationImage('');
            const data = await fetchWeather(searchText);
            setWeatherData(data);
            setSearchText('');
            setWIcon(mapWeatherIcon(data?.weather[0]?.icon));
            temperature[0].innerText = Math.floor(data.main.temp) + ' °F';
            humidity[0].innerText = data.main.humidity + ' %';
            wind[0].innerText = data.wind.speed + ' km/h';
            location[0].innerText = data.name.toUpperCase();
            description[0].innerText = data.weather[0].main;

            setAnimationImage('animate__animated animate__fadeInUp');
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setSearchText('');
        }
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setSearchText(value);
    }

    function handleOpenModal() {
        setWeatherModal(true);
    }

    function handleCloseModal() {
        setWeatherModal(false);
    }


    return (
        <div className="container">
            <div className="top-bar">
                <input
                    type="text"
                    className="cityInput"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleChange}
                />
                <div className="search-icon" onClick={handleSearch}>
                    <img src={searchIcon} alt="" />
                </div>
            </div>

            <div className={`weather-image ${animationImage}`}>
                <img src={wIcon} alt="" />
            </div>
            <div className="weather-description">-</div>
            <div className="weather-temp">-</div>
            <div className="weather-location">-</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">-</div>
                        <div className="humidity-text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="windspeed-score">-</div>
                        <div className="windspeed-text">Wind Speed</div>
                    </div>
                </div>
            </div>

            <button className="openWeatherModal" onClick={handleOpenModal}>View Details</button>
            {openWeatherModal && <WeatherDetailModal closeModal={handleCloseModal} weatherData={weatherData} />}
        </div>
    );
}
