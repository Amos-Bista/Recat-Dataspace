"use client";
import React from "react";
import DynamicHeroSection from "../component/dynamic/dynamicherosection";
import DynamicAccordion from "../component/dynamic/dynamicaccordion";
import DyanmicImg from "../component/dynamic/dyanmicImg";
import DynamicPlanCard from "../component/dynamic/dynamicplancard";
const ServicePage = () => {
  return (
    <main>
      <DynamicHeroSection />
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] ml-0">
          <DynamicAccordion />
        </div>
        <DyanmicImg />
      </div>
      <DynamicPlanCard />
    </main>
  );
};

export default ServicePage;
