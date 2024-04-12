
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Slider() {
  return (
    <>
    <Swiper  className=' w-full' >
        <SwiperSlide   className=''>
            <div className=' slide slide2 rounded-xl border-2 border-gray-500       '>
                {/* <img className='h-full w-full bg-cover' src={slide1} alt="" /> */}
                <h1>hello</h1>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className='slide slide2'>
                <h1>slide1</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide slide3'>
                <h1>slide1</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide slide4'>
                <h1>slide1</h1>
            </div>
        </SwiperSlide> */}
    </Swiper>
    </>
  )
}
