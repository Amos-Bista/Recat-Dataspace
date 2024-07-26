import React, { useState, useEffect, useRef } from "react";
import Abouthero from "../component/about/abouthero";
import AboutAccordion from "../component/about/aboutaccordion";
import Milestone from "../component/about/milestone";

const About = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const borderRef = useRef(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (borderRef.current) {
        const { top, bottom } = borderRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = top < windowHeight && bottom >= 0;

        // Determine scroll direction
        if (window.scrollY > previousScrollY.current) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }

        previousScrollY.current = window.scrollY;

        // Apply animation class if visible
        if (isVisible) {
          borderRef.current.classList.add("animate-border");
        } else {
          borderRef.current.classList.add("animate-border");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Abouthero />

      <div className="flex  justify-between mx-auto mt-24 w-[90%] ">
        <div className="w-[100%]  flex-col gap-2">
          <h1 className="flex text-6xl font-bold text-center">
            Why DataSpace?
          </h1>
          <ul className="py-4 pl-4 font-medium leading-relaxed list-decimal ">
            <AboutAccordion />
          </ul>
        </div>
        <img
          src="/aboutbody.png"
          alt=""
          // style={{
          //   maxWidth: "600px",
          //   width: "500px",
          //   height: "280px",
          //   maxHeight: "280px",
          // }}
          className="max-w-[600px] w-[420px] h-96 sm:max-w-[200px] md:max-w-[400px] lg:max-w-[1500px] "
        />
      </div>

      <div className="relative flex-col justify-center gap-10 mb-8 border-[#0D5077] ">
        <div className="flex justify-center py-4 pt-5 text-4xl font-bold text-[#0D5077]">
          Our Milestones
        </div>
        <Milestone />
        {/* <div
          ref={borderRef}
          className="mt-2 border-animated"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "8px",
            backgroundColor: "#0D5077",
          }}
        ></div> */}
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes borderAnimation {
          0% {
            width: 0;
          }
          // 50% {
          //   width: ${scrollDirection === "down" ? "20%" : "50%"};
          // }
          100% {
            width: ${scrollDirection === "up" ? "100%" : "100%"};
          }
        }

        .border-animated {
          animation: borderAnimation 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }
      `}</style>
    </main>
  );
};

export default About;
