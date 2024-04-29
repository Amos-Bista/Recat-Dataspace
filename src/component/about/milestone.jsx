import React, { useState, useEffect } from "react";

const Milestone = ({ desc, limit }) => {
  const [count, setCount] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(20); // Initial interval duration
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (count < limit) {
        setCount((prevCount) => prevCount + 1); // Increase count
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [count, limit, intervalDuration, isVisible]);

  // Function to handle count up to 20
  useEffect(() => {
    if (isVisible && limit < 25) {
      setIntervalDuration(80); // Reset interval duration
      setCount(0); // Reset count
    }
  }, [limit, isVisible]);

  // Function to handle count up to 100
  useEffect(() => {
    if (isVisible && limit > 300) {
      setIntervalDuration(2); // Further decrease interval duration for faster count up
      setCount(0); // Reset count
    }
  }, [limit, isVisible]);

  return isVisible ? (
    React.createElement("div", { className: "h-68 w-80 py-8 px-6 flex justify-center" },
      React.createElement("div", { className: "flex justify-center flex-col" },
        React.createElement("h1", { className: "text-6xl font-semibold mx-auto" }, count, "+"),
        React.createElement("p", { className: "text-sm text-center font-semibold" }, desc)
      )
    )
  ) : null;
};

export default Milestone;
