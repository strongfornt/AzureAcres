import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="flex items-center h-full p-16  text-gray-600">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-xl text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-red-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
            Looks like we hit a bump in the digital highway. Hang tight while we clear the road ahead and get you back on track."
            </p>
            <Link 
              to='/'
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white  bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-error  rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-error rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-error transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Back to home
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}