/* eslint-disable no-dupe-keys */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import "animate.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passToggle, setPassToggle] = useState(false);
 

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const { name, photo, email, password } = data;
    createUser(email, password)
      .then((users) => {
        const user = users.user;
        toast.success('User creation succeeded')
        //update profile
        updateUserProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile updated successfully "))
          .catch((err) => console.log("error from Profile Update", err));
        
      })
      .catch(() => toast.error('User already exist'))

      reset();
   
  };


  return (
    <>
      <Toaster />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center mt-0 mb-10 "
      >
        <div className="flex flex-col w-full max-w-md p-6  rounded-md sm:p-10 shadow-sm ">
          <div className="mb-4 text-center">
            <h1
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className="my-3 font-bold  text-4xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient
              "
            >
              Register here
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className="text-sm dark:text-gray-600  "
            >
              Register to get an account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            action=""
            className="space-y-10"
          >
            <div className="space-y-4">
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  {...register("name")}
                  
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo Url
                </label>
                <input
                  {...register("photo")}
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo url"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80 "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  {...register("email")}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  required
                  {...register("password", {
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                      message:
                        "Password must contain at least one uppercase and lowercase letter",
                    },

                    minLength: {
                      value: 6,
                      message: "password must be at least six characters long",
                    },
                  })}
                  type={passToggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent text-gray-800 outline-none focus:ring-1 focus:ring-accent/80 "
                />

                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPassToggle(!passToggle);
                  }}
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
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline dark:text-violet-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    
    </>
  );
}
