import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rows, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  // Function to split array into chunks of given size
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const serviceChunks = chunkArray(rows, 6 );

  return (
    <div>
      <div
        className="relative inline-block dropdown"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="relative block text-m hover:underline underline-offset-1 active:text-blue-900">
          Service
        </button>
        <div
          className={`dropdown-content absolute ${
            isDropdownOpen ? "block" : "hidden"
          } bg-white/90 border-[#11396e] shadow-lg rounded-md z-10 right-0 w-[400px]`}
        >
          {isLoading ? (
            <div className="px-4 py-2 text-base font-semibold text-white">
              Loading...
            </div>
          ) : error ? (
            <div className="px-4 py-2 text-base font-semibold text-white">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {serviceChunks.map((chunk, index) => (
                <div key={index} className="flex flex-col">
                  {chunk.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-xl font-semibold text-[#11396e] hover:bg-[#11396e]/20"
                      style={{ fontFamily: "Vollkorn, serif" }}
                    >
                      {service.serviceName}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
