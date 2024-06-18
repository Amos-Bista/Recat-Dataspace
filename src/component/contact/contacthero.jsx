import React, { useState, useEffect } from "react";
import ButtonHerosection from "../home/buttonHerosection";

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
    height: "667px",
    transition: "opacity 0.5s ease-in-out",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!heroData) {
    return <div className="absolute top-[50%] left-[4%] text-white text-7xl">No Data</div>;
  }

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        <div
          style={{ width: "100vw", height: "667px" }}
          className="absolute bg-black/50"
        ></div>
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/contacts/${heroData.backgroundImage}`}
          alt={heroData.title}
          style={imgStyles}
          className="w-max-screen"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/defaultImage.png"; // Fallback image
          }}
        />
        <div className="absolute top-[50%] left-[4%]">
          <h1 className="text-white text-7xl">{heroData.title}</h1>
          <h1 className="text-xl text-white">{heroData.description}</h1>
          <ButtonHerosection />
        </div>
      </div>
    </main>
  );
};

export default ContactHero;
