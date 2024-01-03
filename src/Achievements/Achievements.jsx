import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/achievements.jpg'
import slide2 from '../assets/achievements2.jpg'
import slide3 from '../assets/achievements3.jpg'
import slide4 from '../assets/achievements4.jpg'
import slide5 from '../assets/achievements5.jpg'

const Achievements = () => {
    return (
        <div className="mt-44">
            <SectionTitle heading='achievements'></SectionTitle>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className="w-3/4  mx-auto" src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-3/4  mx-auto" src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-3/4  mx-auto" src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-3/4  mx-auto" src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-3/4  mx-auto" src={slide5} alt="" /></SwiperSlide>

            </Swiper>
            <div className="mt-10 px-5">
                <p>The BNMPC INFORMATION TECHNOLOGY Club shone in 2023, claiming victories at prestigious events. Our club secured the Runners Up spot in Digital Illustration at the 12th Laboratorians Festival. At Notre Dame Tech Festival's INIT 3.0, the BNMPC IT Club emerged 1st runner up in the Wall magazine segment, clinching 4 prizes. The 8th DCSC National Science Expo witnessed the club receiving 4 prizes, including Best Campus Ambassador. The 6th DRMC International Tech Carnival showcased a stellar performance, with the BNMPC IT Club winning 10 prizes, including 7 champions and 3 runners-up. Notably, our debut at the MGC National Science & Tech Carnival resulted in seven champion prizes, reinforcing our commitment to excellence in information technology and beyond.
                </p>
            </div>

        </div>
    );
};

export default Achievements;