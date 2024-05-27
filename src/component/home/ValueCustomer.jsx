import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ValueCustomer = () => {
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);
  const [customerData, setCustomerData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://172.16.100.109:8282/client/getClient");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      
      const uniqueData = removeDuplicates(data);
      setCustomerData(uniqueData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeDuplicates = (data) => {
    const uniqueMap = new Map();
    data.forEach((item) => {
      uniqueMap.set(`${item.id}-${item.logo}`, item);
    });
    return Array.from(uniqueMap.values());
  };

  const handleLeftArrowClick = () => {
    console.log("Left arrow clicked");
    // Handle left arrow click logic here
  };

  const handleRightArrowClick = () => {
    console.log("Right arrow clicked");
    // Handle right arrow click logic here
  };

  return (
    <div className="relative mb-8">
      {customerData.map((customer, index) => (
        <div key={customer.id}>
          <img
            src={`http://172.16.100.109:8282/client/${customer.logo}`}
            alt={`Customer ${index + 1}`}
            className="w-[10rem] h-[10rem] mb-[15rem] rounded-md ml-14"
          />
        </div>
      ))}
      {/* Left arrow */}
      <Box
        className="absolute top-0 left-0 z-10 mt-16 ml-8"
        style={{ transform: "translate(-50%, 50%)" }}
        onMouseEnter={() => setIsLeftArrowHovered(true)}
        onMouseLeave={() => setIsLeftArrowHovered(false)}
      >
        <Button
          className={`bg-gray-800 p-3 rounded-full ml-3 mt-12 text-white text-xl ${
            isLeftArrowHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleLeftArrowClick}
          variant="contained"
          sx={{ minWidth: 30, minHeight: 30, fontSize: "0.8rem" }}
        >
          &#60;
        </Button>
      </Box>
      {/* Right arrow */}
      <Box
        className="absolute top-0 right-0 z-10 mt-16 mr-12"
        style={{ transform: "translate(50%, 50%)" }}
        onMouseEnter={() => setIsRightArrowHovered(true)}
        onMouseLeave={() => setIsRightArrowHovered(false)}
      >
        <Button
          className={`bg-gray-800 p-3 rounded-full mr-14 mt-14 text-white text-xl ${
            isRightArrowHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleRightArrowClick}
          variant="contained"
          sx={{ minWidth: 28, minHeight: 28, fontSize: "0.7rem" }}
        >
          &#62;
        </Button>
      </Box>
    </div>
  );
};

export default ValueCustomer;
