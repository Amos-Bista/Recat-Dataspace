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

  // Function to update count and desc from MilestoneForm
  const updateMilestoneData = (formData) => {
    setCount(formData.count);
    // You can update 'desc' here if needed based on formData
  };

  return isVisible ? (
    <div className="flex justify-center px-6 py-8 h-68 w-80">
      <div className="flex flex-col justify-center">
        <h1 className="mx-auto text-6xl font-semibold">{count}+</h1>
        <p className="text-sm font-semibold text-center">{desc}</p>
      </div>
    </div>
  ) : null;
};

export default Milestone;
