import React from "react";
import Plans from "../../component/Plans";
import WebhostingHerosection from "../../component/herosection/webhero";
import WebhostAccordion from "../../component/service/accordion/webhostaccordion";
const Webhosting = () => {
  return (
    <main>
      < WebhostingHerosection/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%]">
          <h1 className="text-4xl font-bold ">
            Why Choose Dataspace web host Services?
          </h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
           <WebhostAccordion/>
          </ul>
        </div>
        <img src="/Questions.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Webhosting;
