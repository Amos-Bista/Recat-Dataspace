import Abouthero from "../component/about/abouthero";
import React from "react";
import Plans from "../component/Plans";
import Milestone from "../component/about/milestone";
import AboutAccordion from "../component/about/aboutaccordion";

const About = () => {
  return (
    <main>
      <div className="mb-[3rem]">
        <Abouthero />
      </div>
      <div className="w-65% flex justify-between ">
        <div>
          <h1 className="text-4xl font-bold pl-20 ">Why DataSpace?</h1>
          <ul className="pt-16 text-3xl font-medium leading-relaxed list-decimal pl-20">
            {<AboutAccordion />}
          </ul>
        </div>
        <img
          src="/aboutbody.png"
          alt=""
          style={{ maxWidth: "500px", maxHeight: "490px", margin: "30px", paddingRight: "60px" }}
        />
      </div>
      <Plans />

      <div className="flex justify-center py-6 pt-5 text-4xl font-bold ">
        Our Milestone
      </div>

      <div className="flex flex-col text-black ">
        <div className="flex justify-center gap-96 bg-slate-200 ">
          <Milestone desc="Years of experience" limit={21} />
          <Milestone desc="Satisfied Clients" limit={500} />
          <Milestone desc="Valued Partner" limit={12} />
        </div>
      </div>
    </main>
  );
};
export default About;
