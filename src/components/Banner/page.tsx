import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';  

import 'styles.modules.css';


export const Banner = () => {
    return(
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
               className='styles.swiper'>
                <SwiperSlide><img src="/tmp/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/tmp/banner2.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    ) 
}