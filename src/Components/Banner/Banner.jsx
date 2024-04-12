// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import './styles.css';

import Slider from "./Slider";

export default function Banner() {
  return (
    <>
      <div className="bg-[#252121]">
        <section className="dark:bg-gray-800 dark:text-white">
          <div className="container flex flex-col justify-center p-6  mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-evenly ">
            <div className="flex flex-1 flex-col justify-center  text-center rounded-sm lg:text-left">
              <div className="lg:max-w-md  mx-auto">
                <h1 className="text-5xl font-bold leading-none  sm:text-6xl">
                  Discover Your Dream Getaway
                </h1>
                <p className="mt-6 mb-8 text-base text-[#858080] sm:mb-12">
                  Nestled in a picturesque location, our property offers a haven
                  of
                  <br className="hidden md:inline lg:hidden" />
                  tranquility with world-class amenities and exceptional
                  service. Experience the ultimate escape from the everyday.
                </p>
                <div className="flex space-x-8   items-center justify-center  sm:space-y-0 sm:space-x-10 lg:justify-start">
                  <div className="space-y-2">
                    <p className="text-5xl flex ">
                      2000<span className="text-yellow-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-[#858080]">Happy customer</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl flex ">
                      25<span className="text-yellow-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-[#858080]">Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center  mt-8 lg:mt-0 ">
              <div className=" w-full md:max-w-2xl  lg:max-w-4xl">
                <Slider />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
