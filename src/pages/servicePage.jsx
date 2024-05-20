import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DynamicPlanCard from "../component/dynamic/dynamicplancard";

const ServicePage = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://172.16.100.109:8282/services/getService/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch service data");
      }
      const data = await response.json();
      setServiceData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching service data:", error);
      // Handle error, display message to the user, etc.
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!serviceData) {
    return <div>Loading...</div>;
  }
  // Construct the image URL
  const imageUrl = `http://172.16.100.109:8282/services/${serviceData.serviceBgImage}`;
  console.log(imageUrl);

  const imgStyles = {
    width: "100vw",
    height: "667px",
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div>
      <main>
        <section assName="flex justify-between w-[max-content] relative">
          <div lassName="relative ">
            <div
              style={{ width: "100vw", height: "667px" }}
              className="absolute bg-black/50"
            ></div>
            <img
              src={`http://172.16.100.109:8282/services/${serviceData.serviceBgImage}`}
              style={imgStyles}
              className="w-max-screen"
            />

            <div className="absolute top-[50%] left-[4%]">
              <h1 className="text-white text-7xl">{serviceData.serviceName}</h1>
              <h1 className="pl-2 py-8 text-xl text-white w-[80%]">
                {serviceData.serviceDescription}
              </h1>
            </div>
          </div>
        </section>

        <div>
          {" "}
          <h1>
            {serviceData.accordions.map((panel) => (
              <Accordion
                key={panel.id}
                expanded={expanded === panel.id}
                onChange={handleChange(panel.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${panel.id}bh-content`}
                  id={`${panel.id}bh-header`}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {panel.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{panel.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </h1>
          <h1>{serviceData.serviceName}</h1>
        </div>
        <div>
          |<DynamicPlanCard />
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
