import React from "react";
import Plans from "../../component/Plans";
import EnterpriseHerosection from "../../component/herosection/enterprisehero";
import EnterpriseAccordion from "../../component/service/accordion/enterpriseaccordion";
const Enterprise = () => {
  return (
    <main>
      < EnterpriseHerosection/>
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%]">
          <h1 className="text-4xl font-bold ">
            Why Choose Enterprises Secure Email Service?
          </h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
            {/* <EnterpriseAccordion/> */}
          <EnterpriseAccordion/>
          </ul>
        </div>
        <img src="/enterprise.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
      </div>
      <Plans />
    </main>
  );
};

export default Enterprise;
