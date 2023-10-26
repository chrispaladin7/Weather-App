import { useState, useEffect } from "react";
import Map from "../../components/Map/Map";
import { getCurrentLatLng } from '../../services/geolocation';

export default function WeatherDetailPage({ weatherData }) {
  // const [latitude, setLatitude] = useEffect(null);
  // const [longitude, setLongitude] = useEffect(null);

  // setLatitude(parseFloat`${weatherData.coord.lat}`);
  // setLongitude(`${weatherData.coord.lon}`);

  useEffect(() => {
    async function componentDidMount() {
      const { latitude, longitude } = await getCurrentLatLng();
      console.log(latitude, longitude);
    };

    componentDidMount();
  }, []);

  return (
    <>
      {
        weatherData ?
          <div>
            <div className="detail">
              <br />
              <h1>{weatherData.name}</h1>
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
              <p>Temperature: {weatherData.main.temp} °F</p>
              <p>Humidity: {weatherData.main.humidity} %</p>
              <p>Description: {weatherData.weather[0].description}</p>
              <p>Feels like: {weatherData.main.feels_like} °F</p>
              <p>Min Temp: {weatherData.main.temp_min} °F</p>
              <p>Max Temp: {weatherData.main.temp_max} °F</p>
              <p>Air Pressure: {weatherData.main.pressure} mbar</p>
              <p>Longitude: {weatherData.coord.lon} </p>
              <p>Latitude: {weatherData.coord.lat} </p>
            </div>
            <div className="detail">
              <Map
                lng={weatherData.coord.lon}
                lat={weatherData.coord.lat}
              />
            </div>
          </div>

          :
          <p>No Data Yet</p>
      }

    </>
  );
}