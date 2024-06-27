import React, { useState, useEffect } from "react";

const HeroLearnMore = ({ onServiceClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rows, setRowData] = useState([]);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleServiceClick = (service) => {
    if (onServiceClick) {
      onServiceClick(`/services/${service.id}`);
    }
  };

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

        {rows.map((service) => (
          <div key={service.id}>
            <button
              onClick={() => handleServiceClick(service)}
              className="block px-4 py-2 text-base font-semibold text-black hover:bg-[#11396e]/10"
            >
              {service.serviceName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroLearnMore;
