import './WeatherForm.css'
import searchIcon from "../../Assets/search.png"
import cloudIcon from "../../Assets/cloud.png"
import drizzleIcon from "../../Assets/drizzle.png"
import humidityIcon from "../../Assets/humidity.png"
import rainIcon from "../../Assets/rain.png"
import snowIcon from "../../Assets/snow.png"
import windIcon from "../../Assets/wind.png"
import clearIcon from "../../Assets/clear.png"

export default function WeatherForm() {
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" placeholder='Search...'/>
                <div className="search-icon">
                    <img src={searchIcon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={clearIcon} alt="" />
            </div>
            <div className="weather-temp">24°F</div>
            <div className="weather-location">New York</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">75%</div>
                        <div className="humidity-text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="windspeed-score">18 km/h</div>
                        <div className="windspeed-text">Wide Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}