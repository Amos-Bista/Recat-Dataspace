import Abouthero from "../component/about/abouthero";
import React from "react";
import Aboutcard from "../component/about/aboutcard";
import Milestone from "../component/about/milestone";

const About = () => {
  return (
    <main>
      <Abouthero />
      <section className="flex-col justify-center py-16">
        <h1 className="flex justify-center py-6 text-3xl">WHY DATASPACE?</h1>
        <img
          src="/aboutbody.png"
          alt="footerimage"
          width={911}
          height={484}
          className="py-4 mx-auto"
        />
      </section>

      <div className="">
         <Aboutcard />
      </div>

      <div className="flex justify-center py-6 pt-5 text-4xl font-bold ">
        Our Milestone
      </div>

      <div className="flex flex-col text-black">
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
