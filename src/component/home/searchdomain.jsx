import React from "react";

const SearchDomain = () => {
  return (
    <div className="relative">
    <section className="absolute flex flex-col justify-center w-full max-w-4xl py-10 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2 sm:px-4 lg:px-8">
      <h1 className="mb-8 font-medium tex8t-xl sm:text-lg md:text-xl lg:text-2xl">
        Find the Perfect Domain for you
      </h1>
  
      <div className="flex flex-col items-center justify-center px-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search the Domain"
          className="text-s rounded-lg shadow-lg w-full sm:w-3/4 h-14 pl-10 border-[#0D5077] border-2 mb-4 sm:mb-0 sm:rounded-r-none"
        />
        <button className="text-sm shadow-lg rounded-lg sm:rounded-l-none h-14 w-full sm:w-44 text-white bg-[#0D5077] hover:scale-105">
          Search
        </button>
      </div>
    </section>
  </div>
  )  
};

export default SearchDomain;
