import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "animate.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const location = useLocation();
 
  const navigate = useNavigate();

  const { signInUser, googleLogin, user,githubLogin } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("You're in! Welcome back!");
      })
      .catch(() => {
        toast.error("invalid password or email");
      });
    e.target.reset();
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("You're in! Welcome back!");
      })
      .catch(() => {
        toast.error("Sign-in error. Check connection.");
       
      });
  };

  const handleGithubLogin =() =>{
      githubLogin()
      .then(()=>{
        toast.success("You're in! Welcome back!");
      })
      .catch(()=>{
        toast.error("Sign-in error. Check connection.");
      })
  }



  useEffect(() => {
    if (user) {
      navigate(location.state);
    }
  }, [user]);

  return (
    <>

    <Helmet>
    <title>
    AzureAcres | Login
    </title>
    </Helmet>
      <Toaster />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center mt-2 mb-8 "
      >
        <div className="w-full max-w-md p-4 rounded-md shadow-sm sm:p-8 ">
          <h2
            data-aos="zoom-in"
            data-aos-delay="500 "
            data-aos-duration="1000"
            className="mb-3 text-3xl font-semibold text-center   bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient   "
          >
            Login to your account
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-delay="500 "
            data-aos-duration="1000"
            className="text-sm text-center dark:text-gray-600 "
          >
            Don't have an account yet?
            <Link to="/register" className="underline text-violet-600">
              Register here
            </Link>
          </p>
          <div className="my-6 space-y-3">
            <button
              onClick={handleGoogleLogin}
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4  border rounded-md  
              hover:bg-accent/5 hover:border-accent/5  duration-300"
            >
              <FcGoogle className="text-2xl" />
              <p>Login with Google</p>
            </button>
            <button
            onClick={handleGithubLogin}
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md   hover:bg-accent/5 hover:border-accent/5  duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Login with GitHub</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form onSubmit={handleFormSubmit} action="" className="space-y-8">
            <div className="space-y-4">
              <div
                data-aos="zoom-out-right"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className="space-y-2"
              >
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 text-gray-800 focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    
                    className="text-xs hover:underline dark:text-gray-600 cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent outline-none dark:text-gray-800 focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-accent/80 hover:bg-accent dark:text-gray-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
