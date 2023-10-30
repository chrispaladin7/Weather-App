import Map from "../../components/Map/Map";
import "./WeatherDetailPage.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardHeader

} from 'mdb-react-ui-kit';

export default function WeatherDetailPage({ weatherData }) {
  return (
    <>
      {
        weatherData ?
          <div className="container-detail">
            <MDBCard className="detail-card" border='primary' background='white'>
              <MDBCardImage className="detail-card-image" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{weatherData.name}</MDBCardTitle>
                <MDBCardText>
                  <article>Temperature: <span> {weatherData.main.temp} °F 🌡️</span></article>
                  <article>Humidity: <span> {weatherData.main.humidity} %</span></article>
                  <article>Description: <span> {weatherData.weather[0].description}</span></article>
                  <article>Feels like: <span> {weatherData.main.feels_like} °F</span></article>
                  <article>Min Temp: <span> {weatherData.main.temp_min} °F</span></article>
                  <article>Max Temp: <span> {weatherData.main.temp_max} °F</span></article>
                  <article>Air Pressure: <span> {weatherData.main.pressure} mbar</span></article>
                  <article>Wind Speed: <span> {weatherData.wind.speed} m/h 🌬️</span></article>
                  <article>Longitude: <span> {weatherData.coord.lon} </span></article>
                  <article>Latitude: <span> {weatherData.coord.lat} </span></article>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard >
            <div className="map-detail">
              <MDBCard background='primary'>
                <MDBCardBody>
                  {/* <MDBCardTitle>LOCATION</MDBCardTitle>  */}
                  <Map
                    lng={weatherData.coord.lon}
                    lat={weatherData.coord.lat}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          :
          <div className="container-detail">
            <MDBCard background='primary' className='text-white mb-3'>
              <MDBCardHeader>No Location found</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Sorry!!!!</MDBCardTitle>
                <MDBCardText>
                 No data found
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
      }
    </>
  );
}
