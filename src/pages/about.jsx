import React, { useState, useEffect } from "react";
import Abouthero from "../component/about/abouthero";
import Plans from "../component/Plans";
import AboutAccordion from "../component/about/aboutaccordion";
import Milestone from "../component/about/milestone";

const About = () => {
  return (
    <main>
      <div className="mb-[3rem]">
        <Abouthero />
      </div>
      <div className="w-65% flex justify-between">
        <div>
          <h1 className="pl-20 text-4xl font-bold">Why DataSpace?</h1>
          <ul className="pt-16 pl-20 text-3xl font-medium leading-relaxed list-decimal">
            <AboutAccordion />
          </ul>
        </div>
        <img
          src="/aboutbody.png"
          alt=""
          style={{
            maxWidth: "500px",
            maxHeight: "490px",
            margin: "30px",
            paddingRight: "60px",
          }}
        />
      </div>
      <Plans />

      <div className="flex justify-center py-6 pt-5 text-4xl font-bold">
        Our Milestones
      </div>

      <div className="flex justify-center gap-10">
        <Milestone />
      </div>

      {/* Render MilestoneForm and pass handleFormSubmit as prop */}
    </main>
  );
};

export default About;
