import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import FeaturedIn from "../../Components/FeaturedIn/FeaturedIn";
import ResidenceCard from "../../Components/ResidenceCard/ResidenceCard";

import Faq from "../../Components/Faq/Faq";
import Subscribe from "../../Components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AzureAcres | Home</title>
      </Helmet>
      <div>
        <Banner />
      </div>
      <div className="px-2 md:px-8 lg:px-10 " >
        <FeaturedIn/>
      </div>
      <div className="px-2 md:px-8 lg:px-10 my-16 md:my-20   "  >
        <ResidenceCard/>
      </div>
      <div className="px-2 md:px-8 lg:px-10 my-16 md:my-28 "  >
        <Faq/>
      </div>
      <div className="px-4 md:px-8 lg:px-10 my-16 md:my-28 "  >
        <Subscribe/>
      </div>
    </>
  );
}
