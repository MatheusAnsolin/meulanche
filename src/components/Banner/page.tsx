import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.modules.css';


export const Banner = () => {
    return(
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
               className='styles.swiper'>
                <SwiperSlide><img src="/tmp/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/tmp/banner2.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    ) 
}