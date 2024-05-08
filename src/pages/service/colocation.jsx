"use client";
import Plans from "../../component/Plans";
import Colocationhero from "../../component/herosection/colocation";
import ColocationAccordion from "../../component/service/accordion/colocationaccordion";
import React from "react";


const Backup = () => {
  return (
    <main>
      <Colocationhero/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] ml-0">
          <h1 className="text-4xl font-bold ml-0">
            Why Choose Dataspace Colocation Services?
          </h1>
          <ul className="pt-12 pl-6 text-3xl font-medium leading-relaxed list-decimal ml-0">
          <ColocationAccordion/>
          </ul>
        </div>
        <img src="/Backup.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Backup;