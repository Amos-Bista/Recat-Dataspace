import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";
import PlansCard from "../component/home/plansCard";

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
              // body: serviceData,
            },
            // credentials: "include", // Add this if using cookies for authentication
          }
        );

        const data = await response.json();
        console.log({ data });
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  console.log("services", serviceData);

  return (
    <div className="flex-col text-black">
      <div className="relative mb-64">
        <Herosection />
      </div>
      <div className="absolute top-[70%] left-[-2%] w-full">
        <SearchDomain />
      </div>
      <section>
        <h1 className="flex justify-center my-8 mb-20 text-3xl font-semibold">
          Our Popular Plans & Pricing
        </h1>
        <Plans />
        <div className="flex justify-center mb-20">
          {serviceData?.servicePlans?.map((plan, index) => (
            <PlansCard key={plan.id} plan={plan} index={index} />
          ))}
          {/* <PlansCard/> */}
        </div>
        <div>
          <h1 className="flex justify-center text-3xl font-semibold mb-7">
            Our Valued Customers
          </h1>
          <ValueCustomer />
        </div>
      </section>
    </div>
  );
}

export default Home;
