import React, { useState, useEffect } from "react";
import ButtonHerosection from '../home/buttonHerosection' 
const EnterpriseHerosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/hero1.png",
      caption: "Enterprises Secure Email Service"
    },
    {
      image: "/bg2.jpeg",
      caption: "Enterprises Secure Email Service"
    }
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1900); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const imgStyles = {
    width: "100vw",
    height: "667px",
    transition: "opacity 0.5s ease-in-out" // Smooth transition for opacity
  };

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div style={{ width: "100vw", height: "667px" }} className="absolute bg-black/50"></div>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} style={imgStyles} className="w-max-screen" />
        <div className="absolute top-[50%] left-[3%]">
          <h1 className="text-white text-7xl">{slides[currentSlide].caption}</h1>
          <h2 className="pl-2 py-8 text-xl text-white w-[80%]">
            Introducing Dataspace Enterprise Secure Email: Elevate Your Communication with Unparalleled Protection.
          </h2>
          <ButtonHerosection />
        </div>
      </div>
      
    </main>
  );
};

export default EnterpriseHerosection;
