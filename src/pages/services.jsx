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
    <div >
      <div >
        <div
          className="relative inline-block dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className={` relative block text-m hover:underline underline-offset-1 active:text-blue-900  `}>
            Service
          </button>
          <div
            
            className={`dropdown-content absolute ${
              isDropdownOpen ? "block" : "hidden"
            } bg-gray-100/20 shadow-lg  rounded-md z-10 absolute top-8 right-0 w-64`}
          >
            {rows.map((service) => (
              <div key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="block px-4 py-2 text-base font-semibold text-white hover:bg-[#11396e]"
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
