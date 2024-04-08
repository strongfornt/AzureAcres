import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import 'animate.css';

export default function Register() {
  const [passToggle, setPassToggle] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <>
      <div data-aos="fade-up"  data-aos-duration="1000" className="flex justify-center mt-0 mb-10 ">
        <div className="flex flex-col w-full max-w-md p-6  rounded-md sm:p-10 shadow-sm ">
          <div className="mb-4 text-center">
            <h1 data-aos="zoom-in" data-aos-delay="500 " data-aos-duration="1000" className="my-3 font-bold  text-4xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient
              ">Register here</h1>
            <p data-aos="fade-left" data-aos-delay="500 " data-aos-duration="1000" className="text-sm dark:text-gray-600  ">
              Register to get an account
            </p>
          </div>
          <form onSubmit={handleSubmit} action="" className="space-y-12">
            <div className="space-y-4">
              <div data-aos="zoom-out-right" data-aos-delay="500 " data-aos-duration="1000" >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80"
                />
              </div>
              <div data-aos="zoom-out-left" data-aos-delay="500 " data-aos-duration="1000">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo url"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80 "
                />
              </div>
              <div data-aos="zoom-out-right" data-aos-delay="500 " data-aos-duration="1000" >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80"
                />
              </div>
              <div data-aos="zoom-out-right" data-aos-delay="500 " data-aos-duration="1000" className="relative">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type={passToggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80 "
                />
                <button
                  onClick={() => setPassToggle(!passToggle)}
                  className="absolute top-10 right-2"
                >
                  {passToggle ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                 
                  type="submit"
                  className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-accent/80 hover:bg-accent dark:text-gray-50"
                >
                  Register
                </button>
              </div>
              <p
              data-aos="fade-up" data-aos-delay="500 " data-aos-duration="1000"
              className="px-6 text-sm text-center dark:text-gray-600">
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline dark:text-violet-600"
                >
                  Login
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
