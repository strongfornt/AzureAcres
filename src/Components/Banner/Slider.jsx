import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./styles.css";
import { Pagination,Autoplay } from 'swiper/modules';
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Slider() {
  return (
    <>
      <Swiper 
       
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        
      className=" w-full">
        <SwiperSlide className="">
          <div className=" slide slide1 rounded-xl border-2 border-gray-500       "></div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2 rounded-xl border-2 border-gray-500       "></div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3 rounded-xl border-2 border-gray-500       "></div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide4 rounded-xl border-2 border-gray-500       "></div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide5 rounded-xl border-2 border-gray-500       "></div>
        </SwiperSlide>
       
      
      
      </Swiper>
    </>
  );
}
