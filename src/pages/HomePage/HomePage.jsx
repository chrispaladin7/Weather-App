import "./HomePage.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import WidgetForm from "../../components/WidgetForm/WidgetForm";

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
                <MDBCarousel className="swiper-container" showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h2>WeatherPulse Pro</h2>
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
                        <h5>WeatherPulse Pro</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>WeatherPulse Pro</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src="https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>WeatherPulse Pro</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={5}
                        src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='...'
                    >
                        <h5>WeatherPulse Pro</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            {/* <div className="app-description">

                <WidgetForm />
            </div> */}
        </>
    );
}