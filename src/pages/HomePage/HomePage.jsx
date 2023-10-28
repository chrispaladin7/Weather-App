import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
import "./HomePage.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import WidgetForm from "../../components/WidgetForm/WidgetForm";

export default function HomePage() {
    // useEffect(() => {
    //     async function getLatLng() {
    //       const { latitude, longitude } = await getCurrentLatLng();
    //       console.log(latitude, longitude);
    //     };
    
    //     getLatLng();
    //   }, []);
    
    return (
        <>
            <h1>WeatherPulse Pro</h1>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    effect="Fade"
                >
                    <SwiperSlide><img src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/436792/pexels-photo-436792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                <WidgetForm/>
            </div>
           
        </>
    );
}