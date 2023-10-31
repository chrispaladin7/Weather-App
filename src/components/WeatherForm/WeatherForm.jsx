import './WeatherForm.css';
import searchIcon from '../../Assets/search.png';
import { useState, useEffect } from 'react';
import 'animate.css';
import humidityIcon from '../../Assets/humidity.png';
import windIcon from '../../Assets/wind.png';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function WeatherForm({ handleSearch, weatherData, location, description, temperature, humidity, windspeed, animationImage, weatherIcon }) {
    const [searchText, setSearchText] = useState('');
    const [openWeatherModal, setWeatherModal] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    // Loads the last search from local storage on component mount
    useEffect(() => {
        // Load search history from localStorage on component mount
        const savedSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(savedSearchHistory);
    }, []);

    function handleChange(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setSearchText(value);
    }

    function handleSearchAndUpdateHistory() {
        if (searchText.trim() === '') {
            return;
        }

        // Add the current search term to the search history
        const updatedSearchHistory = [...searchHistory];
        updatedSearchHistory.push(searchText);
        setSearchHistory(updatedSearchHistory);

        // Store the updated search history in localStorage
        localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));

        // Trigger the search
        handleSearch(searchText);
    }


    function handleChange(evt) {
        evt.preventDefault();
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
        <>
            <div className="container">
                <div className="top-bar">
                    <input
                        type="text"
                        className="cityInput"
                        placeholder="Search..."
                        value={searchText}
                        onChange={handleChange}
                    />
                    <div className="search-icon"  onClick={handleSearchAndUpdateHistory}>
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
                <div className="search-history">

                    <h2>Search History</h2>
                    <ul>
                        <MDBAccordion initialActive={null} >
                            {searchHistory.map((search, index) => (
                                <MDBAccordionItem collapseId={index} headerTitle={`Search ${index + 1}`}>
                                    {search}
                                </MDBAccordionItem>
                            ))}
                        </MDBAccordion>
                    </ul>
                </div>


                {/* For future Implememtation */}
                {/* <button className="openWeatherModal" onClick={handleOpenModal}>View Details</button>
                {openWeatherModal && <WeatherDetailModal closeModal={handleCloseModal} weatherData={weatherData} />} */}
            </div>

        </>
    );
}
