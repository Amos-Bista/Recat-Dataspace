import React from "react";
import Plans from "../../component/Plans";
import WebHerosection from "../../component/herosection/webhero";
import Webaccordion from "../../component/service/accordion/webaccordion";
const Web = () => {
  return (
    <main>
      < WebHerosection/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] ml-0">
          <h1 className="text-4xl font-bold ml-4 ">
            Why Choose Web development?
          </h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
            <Webaccordion/>
          </ul>
        </div>
        <img src="/Bare.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Web;
