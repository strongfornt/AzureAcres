import photo from "../../assets/house/faq7.jpg";

export default function Faq() {
  return (
    <>
      <section className="">
        <div className="container flex flex-col justify-between  min-w-full  mx-auto  lg:flex-row lg:justify-between">
          <div className="flex items-center  mb-4  min-w-full lg:min-w-0     justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              data-aos="zoom-in"
              data-aos-delay="1000 "
              data-aos-duration="1000"
              src={photo}
              alt=""
              className="object-cover lg:object-cover   rounded-xl w-full  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center lg:px-4 xl:px-0  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1
              data-aos="zoom-in"
              data-aos-delay="1200 "
              data-aos-duration="1200"
              className="text-3xl font-bold leading-none sm:text-3xl text-accent"
            >
              Our value
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="1400 "
              data-aos-duration="1400"
              className="text-4xl my-2 font-semibold text-[#383737]"
            >
              Value We Give to You
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="1600 "
              data-aos-duration="1600"
              className=" mb-8 text-sm text-[#968989] sm:mb-8"
            >
              At AzureAcres, we are committed to providing exceptional service
              and value to our guests. Our FAQs section addresses common
              inquiries about our amenities, booking, and more.{" "}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div className=" w-full space-y-2">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="1800 "
                  data-aos-duration="1800"
                  className="collapse collapse-plus shadow-md "
                >
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium text-[#322f2f] ">
                    What amenities are included with the property?
                  </div>
                  <div className="collapse-content">
                    <p className=" text-sm text-[#968989]">
                      {" "}
                      Enjoy high-speed Wi-Fi, fitness center, swimming pool,
                      on-site dining, laundry facilities, secure parking, and
                      fully equipped kitchens in many units.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="collapse collapse-plus shadow-md"
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium text-[#322f2f]">
                    What is your booking and cancellation policy?
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm text-[#968989]">
                      {" "}
                      Book with a deposit; cancel up to 48 hours before arrival
                      without penalty. Later cancellations incur a one-night
                      room charge.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="2200 "
                  data-aos-duration="2200"
                  className="collapse collapse-plus shadow-md   "
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium text-[#322f2f]">
                    What safety and security measures are in place?
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm text-[#968989]">
                      We prioritize your safety with secure access, 24/7
                      surveillance, and trained on-site staff for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
