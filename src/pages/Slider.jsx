import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'

import foto1 from '../images/peizaj1.jpg'
import foto2 from '../images/peizaj2.jpg'
import foto3 from '../images/peizaj3.jpg'
import foto4 from '../images/peizaj4.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={foto1} alt="rjhui"/></SwiperSlide>
                <SwiperSlide><img src={foto2} alt="axaa"/></SwiperSlide>
                <SwiperSlide><img src={foto3} alt="axazxasd"/></SwiperSlide>
                <SwiperSlide><img src={foto4} alt="sqqsdqwd"/></SwiperSlide>
            </Swiper>

            <h1>Надо любить жизнь больше, чем смысл жизни.</h1>
        </div>
    );
};

export default Slider;