import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";



export default function Home() {
  return (
    <>
      <Helmet>
        <title>AzureAcres | Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-80px)]  ">
          <Banner/>
  
         </div>
    </>
  );
}
