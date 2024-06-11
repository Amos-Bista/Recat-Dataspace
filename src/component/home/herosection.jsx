import React, { useState, useEffect } from "react";
import ButtonHerosection from "../home/buttonHerosection";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/heroSection/allSections`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch slides");
        }
        const data = await response.json();
        setSlides(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds (adjust as needed)

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const imgStyles = {
    width: "100vw",
    height: "667px",
    transition: "opacity 0.5s ease-in-out",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "667px" }}
          className="absolute bg-black/50"
        ></div>
        {slides.length > 0 && (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/heroSection/${slides[currentSlide].backgroundImage}`}
            alt={slides[currentSlide].title}
            style={imgStyles}
            className="w-max-screen"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/defaultImage.png"; // Fallback image
            }}
          />
        )}

        <div className="absolute top-[50%] left-[4%]">
          <h1 className="text-white text-7xl">{slides[currentSlide].title}</h1>
          <ButtonHerosection />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
