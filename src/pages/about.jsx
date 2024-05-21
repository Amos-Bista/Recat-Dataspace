import Abouthero from "../component/about/abouthero";
import React from "react";
import Plans from "../component/Plans";
import Milestone from "../component/about/milestone";
import AboutAccordion from "../component/about/aboutaccordion";

const About = () => {
  return (
    <main>
      <div className="md-[300px]">
        <Abouthero />
      </div>
      <div className="w-100% flex justify-center ">
          <h1 className="text-4xl font-bold ">Why DataSpace?</h1>
          <ul className="pt-16 pl-6 text-3xl font-medium leading-relaxed list-decimal">
            {<AboutAccordion />}
          </ul>
        </div>
        <img
          src="/aboutbody.png"
          alt=""
          style={{ maxWidth: "500px", maxHeight: "350px", margin: "80px" }}
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
