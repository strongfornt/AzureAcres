// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import './styles.css';

import CountUp from 'react-countup';
import Slider from "./Slider";

export default function Banner() {
  return (
    <>
      <div 
      
      
      id="banner" className="bg-[#252121] ">
        <section className="dark:bg-gray-800 dark:text-white">
         
          <div className="container flex flex-col justify-center p-6  mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between ">
            <div className="flex  flex-col justify-center  text-center rounded-sm lg:text-left">
              <div className="lg:max-w-md   mx-auto ">
                <h1
                
                data-aos="zoom-in-right"
              data-aos-delay="500 "
              data-aos-duration="1000"
                className=" font-bold leading-none  text-4xl  sm:text-6xl ">
                From Budget to Luxury
                </h1>
                <p 
                
                data-aos="zoom-in-right"
              data-aos-delay="700 "
              data-aos-duration="1500"
                className="mt-6 mb-8 text-base text-[#858080] sm:mb-12 ">
                Enjoy a seamless stay with our variety of lodging options, 
                  <br className="hidden md:inline lg:hidden" />
                  offering everything from economical motels to opulent vacation homes.
                </p>
                <div className="flex space-x-8   items-center justify-center  sm:space-y-0 sm:space-x-10 lg:justify-start">
                  <div 
                  data-aos="zoom-in-right"
                  data-aos-delay="900 "
                  data-aos-duration="2000"
                  className="space-y-2">
                    <p className="text-5xl flex ">
                      <CountUp start={8800} end={9000} duration={4} />
                      <span className="text-yellow-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-[#858080]">Happy customer</p>
                  </div>
                  <div 
                  data-aos="zoom-in-up"
                  data-aos-delay="1200 "
                  data-aos-duration="2500"
                  className="space-y-2">
                    <p className="text-5xl flex ">
                      <CountUp  end={25} duration={4} />
                      <span className="text-yellow-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-[#858080]">Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center  flex-1 justify-center mt-8 lg:mt-0  ">
              <div  
              data-aos="zoom-in-left"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className="   sm:px-0 lg:px-0 md:px-0  md:max-w-2xl lg:max-w-xl sm:max-w-xl max-w-xs xl:max-w-2xl rounded-xl overflow-hidden ">
                <Slider />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
