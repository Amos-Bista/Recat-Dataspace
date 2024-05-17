import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serviceData from "../assests/servicedata.json";

const Services = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://172.16.100.109:8282/services/getServices"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="mt-40 ">
      <div className="p-4 mb-11">
        <div
          className="dropdown inline-block relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="dropbtn bg-green-500 text-white px-4 py-2 rounded-full text-base">
            Service
          </button>
          <div
            className={`dropdown-content absolute ${
              isDropdownOpen ? "block" : "hidden"
            } bg-gray-100 min-w-max shadow-lg py-2 rounded-md z-10`}
          >
            {rows.map((service) => (
              <div key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="block px-4 py-2 text-black text-base hover:bg-gray-200"
                >
                  {service.service_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
