import "./HomePage.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePage() {
    return (
        <main>
            <h1>HomePage</h1>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    effect="Fade"
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.prioritytire.com/product_images/uploaded_images/pt-blog-all-season-vs-all-weather-main-image-02-700x467.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?t=st=1698280195~exp=1698283795~hmac=5d63f125c080c2983e999e1b4894f897c602e4a0ce68feccbd8a7110ccd6d4a4&w=1060" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
}