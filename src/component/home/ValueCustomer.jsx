import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
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
    speed: 6000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 0,
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
        `${process.env.REACT_APP_API_BASE_URL}/client/getClient`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCustomerData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="relative mx-16 mb-10">
      <Slider ref={sliderRef} {...settings} >
        {customerData.map((customer, index) => (
          <div key={customer.id} className="w-[9rem] h-[9rem] ">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/client/${customer.logo}`}
              alt={`Customer ${index + 1}`}
              className="w-[9rem] h-[9rem]  rounded-md"
            />
          </div>
        ))}
      </Slider>
      {/* Left arrow */}
      <Box
        className="absolute top-0 left-0 z-10 mt-16 "
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
