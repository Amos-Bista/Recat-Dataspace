import React, { useState, useEffect } from "react";
import serviceData from "../../assests/servicedata.json";

const DyanmicImg = ({ id }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = serviceData.find(
      (service) => service.id === parseInt(id)
    );
    setService(selectedService);
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <img
      src={service.serviceBgImage}
      alt=""
      style={{ maxWidth: "500px", maxHeight: "500px" }}
    />
  );
};

export default DyanmicImg;
