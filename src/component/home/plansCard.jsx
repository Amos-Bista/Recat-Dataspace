import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Card } from "@mui/material";
function PlansCard({ plan }) {
  // const settingss = {
  //   padding: "0px",
  //   marginBottom: "0px",
  //   dots: false,
  //   infinite: false,
  //   autoplay: true,
  //   autoplaySpeed: 0, // Adjust the autoplay speed as needed
  //   speed: 5000,
  //   slidesToShow: 1,
  //   Vertical: true, // Set to false for horizontal autoplay
  // };

  return (
    <div className="flex justify-center mx-4 ">
      {/* <Slider {...settingss} className="rounded-md w-80"> */}
        <div key={plan.id}  className="overflow-hidden font-sans text-center rounded-md shadow-md w-86 bg-gray-200/40 ">
          {/* Card */}

          <div className="bg-[#0D5077] h-32 flex-col justify-center py-5 px-6">
            <h2
              className="text-4xl bg-[#0D5077] text-white flex mx-auto leading-none w-60"
              style={{ fontFamily: "Vollkorn, serif" }}
            >
              {plan.servicePlanTitle}
            </h2>
            <p className="mx-auto text-lg text-white">
              {plan.servicePlanTiers}
            </p>
          </div>
          <div className="pt-8 pb-6 rounded-lg">
            <div className="flex justify-center align-top">
              <h3 className="pt-1 text-2xl font-bold text-gray-700">Nrs </h3>
              <h3 className="font-sans font-serif text-6xl font-semibold text-gray-700">
                {plan.price}
              </h3>
            </div>
            <div>
              <p className="mt-0 text-base text-gray-700">
                {plan.subscriptionPlan}
              </p>
            </div>
          </div>
          <ul className="px-16 py-1 space-y-6 font-sans">
              {plan.specifications &&
                plan.specifications.map((spec) => (
                  <li
                    key={spec.id}
                    className="text-base text-gray-600 border-b-2 border-gray-300"
                  >
                    {spec.feature}
                  </li>
                ))}
          </ul>
          <a href={plan.link} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 mt-6 font-bold text-white bg-[#0D5077] rounded-lg hover:bg-orange-700 mb-8">
              BUY NOW
            </button>
          </a>
        </div>
      {/* </Slider> */}
    </div>
  );
}

export default PlansCard;
