import { Link } from "react-router-dom";


export default function Subscribe() {
  return (
    <>
        <section 
		data-aos="zoom-in"
		data-aos-delay="1000 "
		data-aos-duration="1000"
		className="py-6 bg-blue-600  rounded-xl">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-6 md:p-10 md:px-24 xl:px-48">
		<h1 
		data-aos="zoom-in"
		data-aos-delay="1200 "
		data-aos-duration="1200"
		className=" text-3xl lg:text-4xl font-bold leading-none text-white text-center">Get started with AzureAcres</h1>
		<p 
		data-aos="zoom-in"
		data-aos-delay="1400 "
		data-aos-duration="1400"
		className="text-base font-medium text-center text-white">
			Begin your adventure with us and discover a world of luxury properties and unparalleled experiences. Let us help you find your dream destination.
		</p>
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<Link


            to='mailto:aktershoaib574@gmail.com'
            className="px-8  hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold  border-2 border-white rounded-lg dark:text-gray-50">Get started</Link>
			{/* <button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700">Learn more</button> */}
		</div>
	</div>
</section>
    </>
  )
}
