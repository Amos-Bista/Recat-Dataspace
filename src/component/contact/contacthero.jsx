import React, { useState, useEffect } from "react";


const Contacthero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const slides = [
    {
      image: "/tele.jpeg",
      caption: "Contact Us",
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

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

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
          <h1 className="text-7xl text-white">
            {slides[currentSlide].caption}
          </h1>
          <h2 className="pl-2 text-3xl text-white">
            Any question or remarks? Just write us a message!
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Contacthero;
