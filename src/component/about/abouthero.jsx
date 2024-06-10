// export default Abouthero;
import React, { useState, useEffect } from "react";
import AboutAccordion from "./aboutaccordion";

const Abouthero = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const imgStyles = {
    width: "100vw",
    height: "657px",
    position: "center",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };
  return (
    <div className="flex justify-between w-[max-content] relative ">
      <div
        style={{ width: "100vw", height: "657px" }}
        className="absolute bg-black/50"
      ></div>
      {rows.length > 0 ? (
        rows.length > 0 && (
          <section>
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${rows[0].backgroundImage}`}
              alt={rows[0].title}
              style={imgStyles}
            />
            <div className="absolute top-[50%] left-[4%]">
              <h1 className="text-white text-7xl">{rows[0].title}</h1>

              <h2 className="text-xl text-white w-[60%]">
                {rows[0].description}
              </h2>
            </div>
          </section>
        )
      ) : (
        <section>
          <img style={imgStyles} />
          <div className="absolute top-[50%] left-[4%]">
            <h1 className="text-white text-7xl">Opps ! Nothing to display</h1>
          </div>
        </section>
      )}
    </div>
  );
};

export default Abouthero;
