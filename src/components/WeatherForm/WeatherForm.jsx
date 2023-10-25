import './WeatherForm.css';
import searchIcon from '../../Assets/search.png';
import { useState } from 'react';
import 'animate.css';
import humidityIcon from '../../Assets/humidity.png';
import windIcon from '../../Assets/wind.png';
import clearIcon from '../../Assets/clear.png';
import WeatherDetailModal from '../WeatherDetail/WeatherDetailModal';

export default function WeatherForm({ handleSearch, weatherData, location, description, temperature, humidity, windspeed, animationImage, weatherIcon }) {
    const [searchText, setSearchText] = useState('');
    const [openWeatherModal, setWeatherModal] = useState(false);

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
                <img src={weatherIcon} alt="" />
            </div>
            <div className="weather-description">{description ? description : "No data"}</div>
            <div className="weather-temp">{temperature ? temperature : "-"}</div>
            <div className="weather-location">{location ? location : "N/A"}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{humidity ? humidity : "-"}</div>
                        <div className="humidity-text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="windspeed-score">{windspeed ? windspeed : "-"}</div>
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
