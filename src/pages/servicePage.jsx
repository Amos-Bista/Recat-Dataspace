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

  return (
    <div>
      <main className="relative mt-60">
        <div>
          <h1>{serviceData.serviceName}</h1>
          <h1>{serviceData.serviceDescription}</h1>
          <img
            src={`http://172.16.100.109:8282/services/${serviceData.serviceBgImage}`}
            className="w-[10rem] h-[10rem] mb-[15rem] rounded-md ml-14   "
          />
        </div>

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
