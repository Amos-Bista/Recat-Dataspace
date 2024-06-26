import React from "react";

function PlansCard() {
  return (
    <div className="w-auto overflow-hidden font-sans text-center rounded-lg shadow-md bg-blue-100/30">
      <div className="bg-[#0D5077] py-6  px-12">
        <h2 className=" text-5xl  bg-[#0D5077] text-white font-serif flex mx-auto w-96">
          Virtual Private Server
        </h2>
        <p className="pt-2 mx-auto text-white">BRONZE</p>
      </div>
      <div className="py-4 rounded-lg ">
        <div className="flex justify-center gap-2 align-top">
          <h3 className="pt-2 text-xl text-gray-800">Nrs. </h3>
          <h3 className="font-serif text-gray-800 text-8xl">1000</h3>
        </div>
        <p className="text-gray-600 text-l">Monthly</p>
      </div>
      <ul className="px-12 space-y-2">
        <li className="py-3 border-b-2 border-gray-900/10">1 CORE CPU</li>
        <li className="py-3 border-b-2 text-l border-gray-900/10">
          500 MB DISK SPACE
        </li>
        <li className="py-3 border-b-2 border-gray-900/10">1 GB RAM</li>
        <li className="py-3 border-b-2 border-gray-900/10">
          24/7 CUSTOMER SUPPORT
        </li>
      </ul>
      <button className="px-10 py-5 mt-6 font-bold text-white bg-[#0D5077] rounded-md hover:bg-orange-700 mb-8">
        BUY NOW
      </button>
    </div>
  );
}

export default PlansCard;
