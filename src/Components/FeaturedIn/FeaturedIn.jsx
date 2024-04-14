import Marquee from "react-fast-marquee";
import logo1 from './../../assets/house/logo1.png'
import client2 from './../../assets/house/client-2.png'
import client3 from './../../assets/house/client-3.png'
import client4 from './../../assets/house/client-4.png'
import client5 from './../../assets/house/client-6.png'

export default function FeaturedIn() {
  return (
    <>
    <div className="mt-5">
    <h1 
    data-aos="zoom-in-right"
    data-aos-delay="1000 "
    data-aos-duration="1200"
    className=" font-bold text-4xl sm:text-4xl lg:text-4xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient" >Featured In</h1>
    </div>
      <div 
      
      data-aos="zoom-in"
              data-aos-delay="1000 "
              data-aos-duration="1500"
      className="mt-5 mb-10 " >
        
      <Marquee pauseOnHover={true} >
  <div className=" gap-16 md:gap-32 flex">
  <img className="" src={logo1} alt="" />
  <img src={client2} alt="" />
  <img src={client3} alt="" />
  <img src={client4} alt="" /> 
  <img src={client5} alt="" /> 
  </div>
</Marquee>
      </div>
    </>
  )
}
