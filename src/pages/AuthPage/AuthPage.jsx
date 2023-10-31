import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";

export default function AuthPage({ setUser }) {
  // const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <main>
        <h1>𝑾𝒆𝒂𝒕𝒉𝒆𝒓𝑷𝒖𝒍𝒔𝒆 𝑷𝒓𝒐</h1>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="Fade"
          >
            <SwiperSlide> <LoginForm setUser={setUser} /></SwiperSlide>
            <SwiperSlide><SignUpForm setUser={setUser} /></SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}