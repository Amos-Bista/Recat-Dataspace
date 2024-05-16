"use client";
import React from "react";

import { useParams } from "react-router-dom";
import DynamicAccordion from "../component/dynamic/dynamicaccordion";
import DyanmicImg from "../component/dynamic/dyanmicImg";
import DynamicPlanCard from "../component/dynamic/dynamicplancard";
import ServiceHero from "../component/services/servicehero";
const ServicePage = () => {
  const { id } = useParams();
  return (
    <main>
      <ServiceHero id={id} />
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%] ml-0">
          <DynamicAccordion id={id} />
        </div>
        <DyanmicImg id={id} />
      </div>
      <DynamicPlanCard id={id} />
    </main>
  );
};

export default ServicePage;
