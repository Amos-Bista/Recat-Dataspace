import React, { useState, useEffect } from "react";
import ButtonHerosection from "../home/buttonHerosection";
import { CircularProgress } from "@mui/material";
import parse from "html-react-parser";

const ContactHero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch hero data");
        }
        const data = await response.json();
        setHeroData(data[0]); // Assuming the API returns an array and we need the first item
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

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

  if (!heroData) {
    return (
      <div className="absolute top-[50%] left-[4%] text-white text-7xl">
        No Data
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
        <img
          src={heroData.backgroundImage}
          alt={heroData.title}
          style={imgStyles}
          className="w-max-screen"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/defaultImage.png"; // Fallback image
          }}
        />
        <div className="absolute top-[40%] left-[4%] w-[90%]">
          <h1 className="text-white text-7xl">{heroData.title}</h1>
          <h1 className="mt-3 text-xl text-white">
            {parse(heroData.description)}
          </h1>
          <ButtonHerosection className="pl-1" />
        </div>
      </div>
    </main>
  );
};

export default ContactHero;
