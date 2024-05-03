"use client";
import Plans from "../../component/Plans";
import BareHerosection from "../../component/herosection/barehero";
import ColocationAccordian from "../../component/service/accordian";
import React from "react";

const Bare = () => {
  return (
    <main>
      <BareHerosection/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%]">
          <h1 className="text-5xl font-bold ">
            Why Choose Dataspace Co-location Services?
          </h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
            <ColocationAccordian />
          </ul>
        </div>
        <img src="/Bare.png" alt="" />
      </div>
      <Plans />
    </main>
  );
};

export default Bare;
