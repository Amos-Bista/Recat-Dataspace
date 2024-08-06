import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/services/getService/1`,
          {
            method: "GET",
            headers: {
              // Add your authorization header if needed
              // Example: Authorization: `Bearer ${yourAuthToken}`,
              // "Content-Type": "application/json",
            },
            // credentials: "include", // Add this if using cookies for authentication
          }
        );

        const data = await response.json();
        setServiceData(data.servicePlans || []);
        console.log(data.servicePlans);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  console.log("services", serviceData);

  return (
    <div className="flex-col justify-center text-black">
      <div className="relative ">
        <Herosection />
      </div>
      <div className="absolute top-[48rem]  md:left-[0.5rem]  xl:left-[2.5rem] w-full sm:left-[1rem] ">
        <SearchDomain />
      </div>
      <section className=" md:mt-48 sm:mt-64" >
        <h1 className="flex justify-center w-full mx-auto my-8 font-semibold lg:mb-20 lg:text-4xl md:text-3xl sm:text-2xl sm:mb-12">
          Our Popular Plans & Pricing
        </h1>
        <Plans />
        {/* <div className="flex justify-center mb-20">
          {serviceData?.servicePlans?.map((plan, index) => (
            <PlansCard key={plan.id} plan={plan} index={index} />
          ))}
        </div> */}

        <div>
          <h1 className="flex justify-center w-full mx-auto my-8 font-semibold lg:mb-20 lg:text-4xl md:text-3xl sm:text-2xl sm:mb-12">
            Our Valued Customers
          </h1>
          <ValueCustomer />
        </div>
      </section>
    </div>
  );
}

export default Home;
