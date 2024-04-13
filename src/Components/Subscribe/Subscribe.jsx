import { Link } from "react-router-dom";


export default function Subscribe() {
  return (
    <>
        <section className="py-6 bg-blue-600  rounded-xl">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-6 md:p-10 md:px-24 xl:px-48">
		<h1 className=" text-3xl lg:text-4xl font-bold leading-none text-white text-center">Get started with AzureAcres</h1>
		<p className="text-base font-medium text-center text-white">Subscribe and find super attractive price quotes from us. find your residence soon..</p>
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
