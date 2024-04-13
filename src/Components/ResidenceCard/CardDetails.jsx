import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";

export default function CardDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  //  console.log(data);
  const dataSingle = data.find((item) => item.id === id);

  console.log(dataSingle);
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

  return (
    <>
      <div className="px-4 md:px-8 lg:px-10">
        <section className=" ">
          <div className="container flex flex-col-reverse justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between xl:justify-evenly ">
            <div className="flex flex-col justify-center text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-3xl font-bold leading-none sm:text-4xl text-[#383737]  ">
                {estate_title}
              </h1>
              <p className="flex items-center gap-1 mt-4 ">
                <FaLocationDot className="text-[#6b6565]" />
                <span className="text-base dark:text-gray-800 ">
                  {" "}
                  {location}
                </span>
              </p>
              {/* rent and price */}
              <div className="space-x-4 sm:space-x-6 my-2">
                <button className="px-4 py-1 bg-accent rounded-md text-white font-semibold">
                  {price}
                </button>
                <button className="px-4 py-1 bg-red-600 rounded-md text-white font-semibold">
                  {" "}
                  {segment_name} For {status}
                </button>
              </div>
              <div>
                <button className="px-4 py-1 bg-info rounded-md text-white font-semibold">
                  Area - {area}
                </button>
              </div>
              <p className="mt-1 mb-3 text-base text-[#968f8f] sm:mb-3  ">
                <span className="text-lg font-semibold text-[#383737]">
                  Description
                </span>{" "}
                - {description}
              </p>
              <div className="">
               
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <button className="    px-2 py-1 relative rounded group overflow-hidden font-medium border-b border-accent text-accent inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">
                      Facilities --
                    </span>
                  </button>
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-middle sm:modal-middle"
                >
                  <div className="modal-box space-x-5 space-y-2">
                 {
                  facilities.map((item,idx)=> <button key={idx}  className={`px-4 py-1 bg-accent rounded-md text-white font-semibold `} >
                  {item}
                </button>)
                 }

                
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="flex   items-center lg:px-6 xl:px-0  justify-center rounded-xl  mb-8 lg:mt-0 h-80 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
              <img
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
