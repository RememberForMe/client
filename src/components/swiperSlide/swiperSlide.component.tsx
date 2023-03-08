import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

interface IPropsSwiperSlideComponent {
    data: string[];
    direction: 'horizontal' | 'vertical';
    playDelay: number
}

function SwiperSlideComponent({ data, direction, playDelay }: IPropsSwiperSlideComponent) {
    return (
        <Swiper
            direction={direction}
            autoplay={{
                delay: playDelay,
                disableOnInteraction: false
            }}
            modules={[Autoplay]}
            className="w-full"
        >
            {data.map(item => (
                <SwiperSlide>
                    <img className="w-96 h-96 m-auto" src={item} alt="slide image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperSlideComponent;