import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlansCard from "../component/home/plansCard";
import parse from "html-react-parser";
const ServicePage = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getService/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch service data");
      }
      const data = await response.json();
      setServiceData(data);
      setLoading(false); // Update loading state on successful fetch
    } catch (error) {
      console.error("Error fetching service data:", error);
      setLoading(false); // Update loading state on fetch error
      // Handle error, display message to the user, etc.
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  const imgStyles = {
    width: "100vw",
    height: "767px",
    transition: "opacity 0.5s ease-in-out",
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   Vertical: false
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 1024,
  //   //     settings: {
  //   //       slidesToShow: 2,
  //   //       slidesToScroll: 1,
  //   //       infinite: true,
  //   //       dots: true,
  //   //     },
  //   //   },
  //   //   {
  //   //     breakpoint: 600,
  //   //     settings: {
  //   //       slidesToShow: 1,
  //   //       slidesToScroll: 1,
  //   //       initialSlide: 1,
  //   //     },
  //   //   },
  //   // ],
  // };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   vertical: false,
  // };

  return (
    <div>
      {/* <style>{`
                .custom-accordion .MuiAccordion-root.Mui-expanded {
                    margin: 0;
                }
                .custom-accordion .MuiAccordion-root {
                    box-shadow: solid 10px gray;
                    border-left: solid 10px gray;
                    border-right: solid 10px gray;
                    border-bottom: solid 10px gray;
                }
                .custom-accordion .MuiAccordionSummary-root {
                    border-radius: 0;
                }
                .custom-accordion .MuiAccordionSummary-content {
                    margin: 0;
                }
            `}</style> */}
      <main>
        <section className="flex justify-between w-[max-content] relative">
          <div className="relative">
            <div
              style={{ width: "100vw", height: "767px" }}
              className="absolute bg-black/70"
            ></div>
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/services/${serviceData?.serviceBgImage}`}
              style={imgStyles}
              alt={serviceData?.serviceName}
              className="w-max-screen"
            />

            <div className="absolute top-[35%] left-[4%]  w-[90%]">
              <h1 className="text-white text-7xl">
                {serviceData?.serviceName}
              </h1>
              <h1 className="pt-3 text-xl text-white ">
                {parse(serviceData?.serviceDescription)}
              </h1>
            </div>
          </div>
        </section>

        <div className="flex flex-row justify-between pr-[4rem] w-full h-full mt-[3rem] mb-24">
          <div className="pl-16 text-xl w-[55%]">
            <h1 className="my-12 ml-3 text-4xl font-bold">
              {parse(serviceData?.serviceSubName)}
            </h1>
            <div>
              {serviceData.accordions.map((panel, index) => (
                <div key={panel.id}>
                  <Accordion
                    className="bg-gray-900 border-black border-b-1 "
                    expanded={expanded === panel.id}
                    onChange={handleChange(panel.id)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${panel.id}bh-content`}
                      id={`${panel.id}bh-header`}
                    >
                      <Typography
                        className="w-full"
                        sx={{
                          flexShrink: 0,
                          fontSize: "1.2rem",
                          fontWeight: "bold", // Apply bold font weight
                        }}
                      >
                        {index + 1}. {panel.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="pl-5" sx={{ fontSize: "1.1rem" }}>
                        {parse(panel?.description)}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/services/${serviceData?.serviceSubImage}`}
              alt={serviceData.serviceName}
              className="w-max-screen w-[28rem] "
            />
          </div>
        </div>

        {/* <Slider {...settings}> */}
        <h1 className="flex justify-center mb-20 text-3xl font-semibold">
          Feature Plans and Pricing{" "}
        </h1>
        <div className="mb-12 flex justify-center w-[100%] ">
          {serviceData.servicePlans.map((plan, index) => (
            <PlansCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
        {/* </Slider> */}
      </main>
    </div>
  );
};

export default ServicePage;
