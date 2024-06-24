import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonHerosection = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div>
      <button
        className="px-4 py-1 mt-6 text-xl text-white border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
        onClick={handleClick}
      >
        Learn more
      </button>
    </div>
  );
};

export default ButtonHerosection;
