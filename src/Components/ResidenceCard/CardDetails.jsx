import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import { Helmet } from "react-helmet-async";
// import {stateData} from '../ResidenceCard/data'

export default function CardDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  //  console.log(data);
  const dataSingle = data.find((item) => item.id === id);


  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    location,
    image,
    area,
    facilities,
  } = dataSingle;

  const center = [10.771278605629783, 106.69012489341263];
  return (
    <>
      <Helmet>
        <title>AzureAcres | cardDetails/{id}</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        data-aos-delay="1000 "
        data-aos-duration="1000"
        className="px-4 md:px-8 lg:px-10"
      >
        <section className="  ">
          <div className="container flex flex-col-reverse justify-center my-8  mx-auto sm:my-12 lg:mt-20 lg:mb-16 lg:flex-row lg:justify-between xl:justify-evenly ">
            <div className="flex flex-col justify-center text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1
                data-aos="zoom-in"
                data-aos-delay="1200 "
                data-aos-duration="1200"
                className="text-3xl font-bold leading-none sm:text-4xl text-[#383737]  "
              >
                {estate_title}
              </h1>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="1400 "
                data-aos-duration="1400"
                className="flex items-center gap-1 mt-4 "
              >
                <FaLocationDot className="text-[#6b6565]" />
                <span className="text-base dark:text-gray-800 ">
                  {" "}
                  {location}
                </span>
              </p>
              {/* rent and price */}
              <div className="mt-2"  >
              <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="px-4 py-1 bg-info rounded-md text-white font-semibold"
                >
                  Area - {area}
                </button>
              </div>
              <div className="space-x-4 sm:space-x-6 my-2 ">
               <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="px-4 py-1 bg-accent rounded-md  text-white font-semibold"
                >
                  {segment_name}
                </button>
              
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1800 "
                  data-aos-duration="1800"
                  className="px-4 py-1 bg-red-600 rounded-md text-white font-semibold"
                >
                  {" "}
                   For {status}
                </button>
              </div>
              <div>
              <button
                  data-aos="zoom-in-right"
                  data-aos-delay="1600 "
                  data-aos-duration="1600"
                  className="px-4 py-1 bg-info rounded-md text-white font-semibold"
                >
                  {price}
                </button>
              </div>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className="mt-1 mb-3 text-base text-[#968f8f] sm:mb-3  "
              >
                <span className="text-lg font-semibold text-[#383737]">
                  Description
                </span>{" "}
                - {description}
              </p>
              <div className="">
                <h1
                  data-aos="zoom-in-right"
                  data-aos-delay="2400 "
                  data-aos-duration="2400"
                  className="text-lg font-semibold text-[#383737] "
                >
                  Facilities --
                </h1>
                <ul
                  data-aos="zoom-in-right"
                  data-aos-delay="2600 "
                  data-aos-duration="2600"
                  className="list-disc list-inside text-base text-[#968f8f] ml-2 "
                >
                  {facilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h1 
                   data-aos="zoom-in"
                   data-aos-delay="2600 "
                   data-aos-duration="2600"
                  
                  className="text-3xl mb-3 font-bold leading-none sm:text-4xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient  ">
                    Location on map -
                  </h1>

                  <div 
                   data-aos="zoom-in"
                   data-aos-delay="2600 "
                   data-aos-duration="2600"
                  className="rounded-xl mb-4 ">
                    <MapContainer
                      center={center}
                      zoom={10}
                      className="sm:max-w-[100vh]  min-h-[60vh] rounded-xl "
                    >
                      <TileLayer
                        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Y0TI1FEsIrdW6vERNkqU"
                        attribution="<a href='https://www.maptiler.com/copyright/"
                        target="_blank'>&copy; MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap contributors</a>"
                      />

                      {statesData.features.map((state, idx) => {
                        const coordinates = state.geometry.coordinates[0];
                        return (
                          <Polygon
                            key={idx}
                            pathOptions={{
                              fillColor: "#FD8D3C",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              dashArray: 3,
                              color: "white",
                            }}
                            positions={coordinates}
                          />
                        );
                      })}
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex   items-center lg:px-6 xl:px-0  justify-center rounded-xl  mb-8 lg:mt-0 h-80 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
              <img
                data-aos="zoom-in"
                data-aos-delay="1000 "
                data-aos-duration="1000"
                src={image}
                alt=""
                className="sm:object-cover  lg:object-cover w-full  rounded-xl h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
