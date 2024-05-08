"use client";
import Plans from "../../component/Plans";
import ColocationAccordian from "../../component/service/accordian";
import Colocationhero from "../../component/service/colocationhero";
import React from "react";

const Colocation = () => {
  return (
    <main>
      <Colocationhero />
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] mr-2">
          <h1 className="text-4xl font-bold">
            Why Choose Dataspace Co-location Services?
          </h1>
          <ul className="pt-12 pl-5 text-3xl font-medium leading-relaxed list-decimal">
            <ColocationAccordian />
          </ul>
        </div>
        <img src="/Questions.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Colocation;
