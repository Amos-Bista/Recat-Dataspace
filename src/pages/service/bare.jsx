"use client";
import Plans from "../../component/Plans";
import BareHerosection from "../../component/herosection/barehero";
import BareAccordion from "../../component/service/accordion/bareaccordion";
import React from "react";

const Bare = () => {
  return (
    <main>
      <BareHerosection/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] ml-0 ">
          <h1 className="text-4xl font-bold  ">
            Why Choose Bare Metal Server Service ?
          </h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
            <BareAccordion/>
          </ul>
        </div>
        <img src="/Bare.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Bare;
