import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
// import customerData from "../../assests/customerData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ValueCustomer = () => {
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef(null);
  const [customerData, setCustomerData] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
  };

  const handleLeftArrowClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setAutoplay(false);
      setTimeout(() => {
        setAutoplay(true);
      }, 5000);
    }
  };

  const handleRightArrowClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setAutoplay(false);
      setTimeout(() => {
        setAutoplay(true);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://172.16.100.109:8282/client/getClient"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="relative mb-8">
      <Slider ref={sliderRef} {...settings}>
        {customerData.map((customer, index) => (
          <div key={customer.id} className="w-[10rem] h-[10rem]">
            <img
              src={`http://172.16.100.109:8282/client/${customer.logo}`}
              alt={`Customer ${index + 1}`}
              className="w-[10rem] h-[10rem] mb-[15rem] rounded-md ml-14   "
            />
          </div>
        ))}
      </Slider>
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
