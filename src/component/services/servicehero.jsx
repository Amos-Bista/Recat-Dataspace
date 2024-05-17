import React, { useEffect, useState } from "react";
import serviceData from "../../assests/servicedata.json";

const ServiceHero = ({ id }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://172.16.100.109:8282/services/getService/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const selectedService = data.find(
          (service) => service.id === parseInt(id)
        );
        setService(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "667px" }}
          className="absolute bg-black/50"
        ></div>
        <img
          // src={service.serviceBgImage}
          style={{ width: "100vw", height: "667px" }}
          className="w-max-screen"
        />
        <div className="absolute top-[50%] left-[3%]">
          <h1 className="text-white text-7xl">{service.serviceName}</h1>
          <h2 className="pl-2 py-8 text-xl text-white w-[80%]">
            {service.serviceDescription}
          </h2>
          {/* Add additional components or elements as needed */}
        </div>
      </div>
    </main>
  );
};

export default ServiceHero;
