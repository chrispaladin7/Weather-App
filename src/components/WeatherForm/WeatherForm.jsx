import './WeatherForm.css';
import searchIcon from '../../Assets/search.png';
import { useState } from 'react';
import 'animate.css';
import humidityIcon from '../../Assets/humidity.png';
import windIcon from '../../Assets/wind.png';
import clearIcon from '../../Assets/clear.png';
import WeatherDetailModal from '../WeatherDetail/WeatherDetailModal';

export default function WeatherForm({ handleSearch, weatherData,location,description,temperature,humidity,windspeed }) {
    const [searchText, setSearchText] = useState('');
    const [wIcon, setWIcon] = useState(clearIcon);
    const [animationImage, setAnimationImage] = useState('');
    const [openWeatherModal, setWeatherModal] = useState(false);
    // const [ description, temp, name, humidity, speed ] = useState(weatherData);
    

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
                <div className="search-icon" onClick={() => handleSearch(searchText)}>
                    <img src={searchIcon} alt="" />
                </div>
            </div>

            <div className={`weather-image ${animationImage}`}>
                <img src={wIcon} alt="" />
            </div>
            <div className="weather-description"></div>
            <div className="weather-temp"></div>
            <div className="weather-location">{location}</div>
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

            <div></div>

            <button className="openWeatherModal" onClick={handleOpenModal}>View Details</button>
            {openWeatherModal && <WeatherDetailModal closeModal={handleCloseModal} weatherData={weatherData} />}
        </div>
    );
}
