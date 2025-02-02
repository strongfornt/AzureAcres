/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Card({data}) {
   
    const {id,estate_title ,segment_name,description,price,status,location,image } = data;
  return (
    <>
      <div 
      data-aos="zoom-in-up"
      data-aos-delay="500 "
      data-aos-duration="1000"
      className=" p-6  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ">
       <div className="rounded-md overflow-hidden">
       <img


          src={image}
          alt=""
          className="object-cover object-center w-full hover:scale-110 duration-300  transition-all rounded-md h-72 dark:bg-gray-500"
        />
       </div>
        <div className="mt-6 mb-2">
          <span 
          data-aos="zoom-in-up"
          data-aos-delay="1000 "
          data-aos-duration="1200"
          className="block text-xs font-medium tracking-widest uppercase dark:text-accent">
           {segment_name}
          </span>
          <h2 
          data-aos="zoom-in-up"
          data-aos-delay="1200 "
          data-aos-duration="1200"
          className="text-xl font-semibold tracking-wide">
            {estate_title}
          </h2>
          <p 
          data-aos="zoom-in-up"
          data-aos-delay="1400 "
          data-aos-duration="1400"
          className="flex items-center gap-1 ">
            <FaLocationDot className="text-[#6b6565]" />
            <span className="text-base dark:text-gray-800 ">
              {" "}
            
             {location}
            </span>
          </p>
        </div>
        <p 
        data-aos="zoom-in-up"
        data-aos-delay="1600 "
        data-aos-duration="1600"
        className="dark:text-gray-800 text-sm text-white ">
       {description.slice(0,90)}...
        </p>

        <div className="flex justify-between items-center ">
          <p 
          data-aos="zoom-in-up"
          data-aos-delay="1800 "
          data-aos-duration="1800"
          className="mt-2 font-semibold text-gray-800 ">{price}</p>
          <p 
          data-aos="zoom-in-up"
          data-aos-delay="1800 "
          data-aos-duration="1800"
          className="mt-2 font-semibold text-accent ">
            For <span>{status}</span>{" "}
          </p>
        </div>
        <div className="mt-8 ">
          <Link 
          data-aos="zoom-in"
          data-aos-delay="2000 "
          data-aos-duration="2000"
            to={`/cardDetails/${id}`}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden  border border-accent/50 font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-accent absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black    transition-colors duration-300 ease-in-out group-hover:text-white">
            View Property
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
