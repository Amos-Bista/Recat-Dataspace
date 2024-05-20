import React, { useState, useEffect } from "react";

const Abouthero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://172.16.100.109:8282/aboutUs/getAboutUs");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      if (data && data.backgroundImage) {
        setSlides([
          {
            image: data.backgroundImage,
            caption: data.description,
          },
          // Add more slides as needed
        ]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1900); // Change slide every 1.9 seconds (adjust as needed)

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
  const opacity = 1 - scrollPosition / window.innerHeight;

  const imgStyles = {
    width: "100vw",
    height: "657px",
    position: "center",
    opacity: opacity < 0 ? 0 : opacity, // Ensure opacity doesn't go below 0
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "657px" }}
          className="absolute bg-black/50"
        ></div>
        {slides.length > 0 && (
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].caption}
            style={imgStyles}
            className="w-max-screen"
          />
        )}

        <div className="absolute top-[50%] left-[4%]">
          <h1 className="text-white text-7xl">
            {slides.length > 0 && slides[currentSlide].caption}
          </h1>
          <h2 className="text-xl text-white w-[60%]">
            {/* Welcome to Dataspace, Nepal's First data center. We're more than just
            a service provider – we're your ally in navigating the digital realm.
            With a commitment to innovation and excellence, we offer secure and
            connected hosting solutions that serve to your unique needs. Our
            dedicated team is here to support you every step of the way,
            ensuring your digital journey is seamless and successful. Join us in
            shaping the future of technology in Nepal. Choose Dataspace to
            elevate your digital experience. */}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Abouthero;
