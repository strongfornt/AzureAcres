import { Helmet } from "react-helmet-async";

export default function GetInTouch() {
  return (
    <>
    <Helmet>
      <title>
      AzureAcres | GetInTouch
      </title>
    </Helmet>

      <div data-aos="fade-up"  data-aos-duration="1000" className="  min-h-[calc(100vh-110px)] flex flex-col items-center justify-center">
        <section className="py-6  w-full">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 
              data-aos="zoom-in" data-aos-delay="500 " data-aos-duration="1000" 
              className="text-4xl font-bold bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient">
                Get in <span className="">touch</span>
              </h1>
              <p 
              data-aos="zoom-in-up" data-aos-delay="500 " data-aos-duration="1000"
              className="pt-2 pb-4">
              Have questions about our properties or interested in booking your next getaway? Don't hesitate to reach out to us! Our friendly team is here to assist you with any inquiries you may have.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                 data-aos="zoom-in-up" data-aos-delay="500 " data-aos-duration="1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span data-aos="zoom-in-left" data-aos-delay="500 " data-aos-duration="1000" >Unknown place, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    data-aos="zoom-in-up" data-aos-delay="500 " data-aos-duration="1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span  data-aos="zoom-in-left" data-aos-delay="500 " data-aos-duration="1000" >123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                  data-aos="zoom-in-up" data-aos-delay="500 " data-aos-duration="1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span  data-aos="zoom-in-left" data-aos-delay="500 " data-aos-duration="1000" >contact@bookhaven.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label data-aos="zoom-in" data-aos-delay="500 " data-aos-duration="1000" className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="your name"
                  className="block w-full pl-2 py-1.5 bg-transparent  rounded-md ring-1 ring-[#13131326] shadow-sm focus:ring-1 outline-none focus:ring-opacity-75 focus:ring-accent/75 "
                />
              </label>
              <label data-aos="zoom-in" data-aos-delay="500 " data-aos-duration="1000" className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="@gmail"
                  className="block w-full rounded-md shadow-sm bg-transparent py-1.5 pl-2 outline-none ring-1 ring-[#13131326]  focus:ring-1 focus:ring-opacity-75 focus:ring-accent/75"
                />
              </label>
              <label data-aos="zoom-in" data-aos-delay="500 " data-aos-duration="1000" className="block">
                <span className="mb-1">Message</span>
                <textarea
                  placeholder="Enter your text here..."
                  rows="3"
                  className="block w-full pl-2 rounded-md outline-none bg-transparent ring-1 ring-[#13131326] focus:ring-1 focus:ring-opacity-75 focus:ring-accent/75"
                ></textarea>
              </label>

              <div>
                <button
                data-aos="fade-up" data-aos-delay="500 " data-aos-duration="1000"
                  href="#_"
                  className="relative px-5 py-3 overflow-hidden font-bold text-gray-600  border border-[#13131326] rounded-lg shadow-inner group"
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-accent/80 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-accent/80 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-accent/80 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-accent group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-accent/80 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
