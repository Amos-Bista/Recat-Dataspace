import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Milestone = ({ id, desc }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [intervalDuration, setIntervalDuration] = useState(20);
  const [name, setName] = useState(""); // Assuming name is passed as prop

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("lastMilestoneData"));
    if (storedData && storedData[id]) {
      setCount(storedData[id].value); // Fetching specific milestone count value
      console.log(`Retrieved count for ${id}:`, storedData[id].value); // Debug log
    }
  }, [id]);

  useEffect(() => {
    const limit = count; // You can adjust the limit as per your requirement

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < limit) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [isVisible, count, intervalDuration]);

  useEffect(() => {
    // Example: Fetching name from localStorage
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="text-6xl font-semibold">{name}</h1> */}
        <p className="text-4xl font-bold">{count}</p>
        <p className="text-sm font-semibold text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Milestone;
