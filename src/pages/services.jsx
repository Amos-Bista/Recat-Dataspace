import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import serviceData from "../assests/servicedata.json";

const Services = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            {serviceData.map((service) => (
              <div key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="block px-4 py-2 text-black text-base hover:bg-gray-200"
                >
                  {service.serviceName}
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
