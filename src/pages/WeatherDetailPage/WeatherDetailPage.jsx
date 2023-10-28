import Map from "../../components/Map/Map";
import "./WeatherDetailPage.css";

export default function WeatherDetailPage({ weatherData }) {
  return (
    <>
      {
        weatherData ?
          <div className="container-detail">
            <h1>{weatherData.name}</h1> {/* Move the h1 here */}
            <div className="detail">
              <br />
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
            <div className="map-detail">
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
