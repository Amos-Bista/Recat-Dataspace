import React, { useState, useEffect } from "react";
import Abouthero from "../component/about/abouthero";
import Plans from "../component/Plans";
import AboutAccordion from "../component/about/aboutaccordion";
import Milestone from "../component/about/milestone";

const About = () => {
  return (
    <main>
      <Abouthero />

      <div className="w-65% mt-12 flex justify-between">
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
      <div className="flex-col justify-center gap-10 my-12 ">
        <div className="flex justify-center py-6 pt-5 text-4xl font-bold">
          Our Milestones
        </div>
        <Milestone />
      </div>

      {/* Render MilestoneForm and pass handleFormSubmit as prop */}
    </main>
  );
};

export default About;
