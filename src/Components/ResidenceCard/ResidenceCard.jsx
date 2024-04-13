import { useLoaderData } from "react-router-dom";
import Card from "./Card";

export default function ResidenceCard() {
  const data = useLoaderData();

  return (
    <>
      <div>
        <h1 className=" font-bold text-4xl sm:text-4xl lg:text-4xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient">
          Our Popular Residence
        </h1>
      </div>
      <div className="mt-5 grid gap-6 md:grid-cols-2  lg:grid-cols-3 lg:gap-6">
        {data.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </>
  );
}
