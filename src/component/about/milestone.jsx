// Milestone.jsx
import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "./formcontext";

const Milestone = ({ desc, limit }) => {
  const { milestones } = useContext(FormContext);
  const [count, setCount] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(20);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (count < limit) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, limit, intervalDuration, isVisible]);

  useEffect(() => {
    if (isVisible && limit < 25) {
      setIntervalDuration(80);
      setCount(0);
    }
  }, [limit, isVisible]);

  useEffect(() => {
    if (isVisible && limit > 300) {
      setIntervalDuration(2);
      setCount(0);
    }
  }, [limit, isVisible]);

  return (
    <div className="flex justify-center gap-10">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-semibold">{milestone.count1}</h1>
          <p className="text-sm font-semibold text-center">{milestone.desc1}</p>
        </div>
      ))}
    </div>
  );
};
export default Milestone;
