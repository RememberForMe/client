import { Outlet } from "react-router-dom";
import 'swiper/css';
import SwiperSlideComponent from "../components/swiperSlide/swiperSlide.component";

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
                <SwiperSlideComponent direction="horizontal" data={slideImages} playDelay={2500}/> 
            </div>
            <div className="h-screen grid place-items-center flex-1 z-50">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthSymmetryLayout; 