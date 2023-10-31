import "./HomePage.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function HomePage() {
    //For future implemantation of accessing user's location
    /* useEffect(() => {
         async function getLatLng() {
           const { latitude, longitude } = await getCurrentLatLng();
           console.log(latitude, longitude);
         };
     
         getLatLng();
       }, []); */

    return (
        <>
            <div>
                <br />
                <MDBCarousel className="swiper-container" showIndicators showControls dealy={3000} fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        
                        <h1>WeatherPulse Pro</h1>
                        <p>
                            Welcome to WeatherPulse Pro, your trusted source for up-to-date weather information. Our app provides you with accurate and real-time weather forecasts, so you can plan your day with confidence. Whether you're looking for the latest weather conditions, hourly forecasts, or long-term predictions, WeatherPulse Pro has you covered. Stay informed and make the most of your day with our user-friendly weather app.
                        </p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>The Wettest Place on Earth: Mawsynram</h5>
                        <p>A village in India, is one of the wettest places on Earth. It receives an average annual rainfall of about 467.4 inches (11,871 millimeters).</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src="https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>El Niño and La Niña</h5>
                        <p>These climate patterns in the Pacific Ocean have a significant influence on global weather. El Niño tends to bring warmer and wetter conditions, while La Niña results in cooler and drier conditions in various parts of the world.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>Coldest Place on Earth</h5>
                        <p>The coldest temperature recorded on Earth was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) at the Vostok Station in Antarctica on July 21, 1983.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={5}
                        src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>Wind Speeds in Hurricanes</h5>
                        <p> The strongest hurricanes can have wind speeds exceeding 200 miles per hour (322 kilometers per hour). These storms are known as Category 5 hurricanes on the Saffir-Simpson Hurricane Wind Scale.</p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            {/* <div className="app-description">

                <WidgetForm />
            </div> */}
        </>
    );
}