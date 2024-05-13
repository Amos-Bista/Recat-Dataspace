"use client";
import React from 'react'
import Plans from '../component/Plans';
import AnnualAccordion from '../component/service/accordion/annualaccordion';
import DynamicHeroSection from '../component/dynamic/dynamicherosection';


const ServicePage = () => {
  return (
    <main>
    < DynamicHeroSection/>
    <div className="w-100% flex justify-center ">
      <div className="px-[4%] my-[5%] ml-0">
        <h1 className="ml-0 text-4xl font-bold">
        Dynamic Routing 
        </h1>
        <ul className="pt-12 pl-6 ml-0 text-3xl font-medium leading-relaxed list-decimal">
        <AnnualAccordion/>
        </ul>
      </div>
      <img src="/Backup.png" alt="" style={{ maxWidth: "500px", maxHeight: "500px" }} />
    </div>
    <Plans />
  </main>
  )
}

export default ServicePage