import React, { useEffect, useState } from "react";

const ServicePlanSpec = () => {
  const [rowData, setRowData] = useState(null); // Initialize rowData as null or an empty object as per your preference

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getService/2`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Ensure rowData is not null before rendering
  if (!rowData) {
    return <div>Loading...</div>; // Add loading state or error handling as needed
  }

  return (
    <div>
      {rowData.servicePlans.map((plan, index) => (
        <div key={index}>
          <ul>
            {plan.specifications.map((specification) => (
              <li key={specification.id}>{specification.feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicePlanSpec;
