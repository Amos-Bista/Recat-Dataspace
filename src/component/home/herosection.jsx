import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const Herosection = (id) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = (servicePath) => {
    navigate(servicePath);
  };

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/heroSection/allSections`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch slides");
        }
        const data = await response.json();
        setSlides(data);
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
      }, 3500); // Change slide every 5 seconds (adjust as needed)

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const imgStyles = {
    width: "100vw",
    height: "767px",
    transition: "opacity 0.5s ease-in-out",
  };

  if (loading) {
    return (
      <div
        style={{ width: "100vw", height: "767px" }}
        className="flex  bg-black/50 w-[max-content] relative "
      >
        <div className="flex justify-center text-center ">
          <CircularProgress
            className="absolute  top-[50%] left-[48%]"
            color="inherit"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ width: "100vw", height: "767px" }}
        className="flex relative  bg-black/90  w-[max-content] "
      >
        <div className="">
          <h1 className="absolute text-white top-[50%] left-[46%]">
            Database not connected!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "767px" }}
          className="absolute bg-black/50"
        ></div>
        {slides.length > 0 && slides[currentSlide].title ? (
          <>
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
            <div className="absolute top-[40%] left-[3rem] w-[90%]">
              <h1 className="text-3xl text-white xl:7xl lg:text-7xl md:text-5xl">
                {slides[currentSlide].title}
              </h1>
              <h1 className="mt-3 text-xl text-white w-[100%]">
                {parse(slides[currentSlide].description)}
              </h1>

              <div>
                <div>
                  <button
                    className="px-4 py-1 mt-6 text-xl text-white border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
                    onClick={() =>
                      handleClick(slides[currentSlide]?.servicePath)
                    }
                  >
                    Learn more
                  </button>
                </div>
              </div>
              {/* <ButtonHerosection id={slides[currentSlide].id} /> */}
            </div>
          </>
        ) : (
          <div
            style={{ width: "100vw", height: "667px" }}
            className="flex relative  bg-black/90  w-[max-content] "
          >
            <div className="flex justify-center text-center">
              <h1 className="absolute text-white top-[50%] left-[46%]">
                NO IMAGE Avaliable!!<br></br> Database is Empty!
              </h1>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Herosection;
