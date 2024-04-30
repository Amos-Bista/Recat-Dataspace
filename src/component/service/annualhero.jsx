
"use client";
import React, { useState, useEffect } from "react";

const Annualhero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const slides = [
    {
      image: "/abouthero.jpeg",
      caption: "Co-location",
    },

    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1900); // Change slide every 5 seconds (adjust as needed)

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const opacity = 1.5 - scrollPosition / window.innerHeight;

  const imgStyles = {
    width: "100vw",
    height: "997px",
    position: "center",
    opacity: opacity < 0 ? 0 : opacity, // Ensure opacity doesn't go below 0
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "997px" }}
          className="absolute bg-black/50"
        ></div>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].caption}
          style={imgStyles}
          className="w-max-screen"
        />
        <div className="absolute top-[50%] left-[3%]">
          <h1 className="text-white text-7xl">
            {slides[currentSlide].caption}
          </h1>
          <h2 className="pl-2 py-10 text-xl text-white w-[80%]">
            Introducing Dataspace Co-location Services: Elevate Your
            Infrastructure with Secure and Connected Hosting.
          </h2>
        </div>
      </div>
    </main>
  );

};

export default Annualhero;
