import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";

function PlansCard() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
    speed: 500, // Transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/services/getService/1`,
          {
            method: "GET",
            headers: {
              // Add your authorization header if needed
              // Example: Authorization: `Bearer ${yourAuthToken}`,
              // "Content-Type": "application/json",
            },
            // credentials: "include", // Add this if using cookies for authentication
          }
        );

        const data = await response.json();
        setServiceData(data.servicePlans);
        console.log(data.servicePlans);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  return (
    <Slider {...settings}>
      {serviceData.map((plan, index) => (
        <div
          key={index}
          className="overflow-hidden font-sans text-center rounded-md shadow-md w-86 bg-gray-200/40"
        >
          {/* Card */}
          <div className="bg-[#0D5077] h-32 flex-col justify-center py-5 px-6">
            <h2
              className="text-4xl bg-[#0D5077] text-white flex mx-auto leading-none w-60 flex justify-center"
              style={{ fontFamily: "Vollkorn, serif" }}
            >
              {plan.servicePlanTitle}
            </h2>
            <p className="mx-auto text-lg text-white">{plan.servicePlanTiers}</p>
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
      ))}
    </Slider>
  );
}

export default PlansCard;
