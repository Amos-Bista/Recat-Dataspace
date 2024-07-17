import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Milestone from "./milestone";
import parse from 'html-react-parser';

const Abouthero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch slides");
        }
        const data = await response.json();
        setSlides(data);
        console.log('nabin', data);
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
    height: "757px",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };

  if (error) {
    return (
      <div>
        <div
          style={{ width: "100vw", height: "767px" }}
          className="bg-black/90"
        >
          {" "}
        </div>
        <div className="flex justify-center text-center ">
          <div className="">
            <h1 className="absolute text-white top-[40%] left-[46%]">
              Database not connected!
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between w-[max-content] relative">
      {loading ? (
        <div>
          <div
            style={{ width: "100vw", height: "767px" }}
            className="bg-black/50"
          ></div>
          <div className="flex justify-center text-center ">
            <CircularProgress
              className="absolute  top-[50%] left-[48%]"
              color="inherit"
            />
          </div>
        </div>
      ) : (
        <section>
          <div
            style={{ width: "100vw", height: "767px" }}
            className="absolute bg-black/40"
          ></div>
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${slides[currentSlide].backgroundImage}`}
            // src="public\bg2.jpeg"
            alt={slides[currentSlide].title}
            style={imgStyles}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/defaultImage.png"; // Fallback image
            }}
          />
          <div className="absolute top-[40%] left-[4%] w-[90%]  ">
            <h1 className="text-white text-7xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl text-white w-[100%] pt-3">
              {parse(slides[currentSlide].description)}
            </h2>
          </div>
        </section>
      )}
    </div>
  );
};

export default Abouthero;
