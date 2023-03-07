import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

function AuthSymmetryLayout() {
    const slideImages = [
        '/sammy-man-carrying-christmas-gifts.gif',
        '/sammy-striped-gift.gif',
        '/martina-man-playing-guitar-music-for-woman.gif'
    ];

    return (
        <div className="block lg:flex overflow-hidden">
            <div className="relative bg-primary h-screen hidden lg:grid place-items-center flex-1">
                <img src="/abstract-136.gif" alt="decor" className="absolute bottom-0 right-0 w-96 h-60"/>
                <img src="/abstract-144.gif" alt="decor" className="absolute top-0 left-0 w-64 h-40"/>
                <Swiper
                    direction="horizontal"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {slideImages.map(image => (
                        <SwiperSlide>
                            <img className="w-96 h-96 m-auto" src={image} alt="slide image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="h-screen grid place-items-center flex-1 z-50">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthSymmetryLayout; 