// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import DynamicPlanCard from "../component/dynamic/dynamicplancard";

// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import serviceDataJson from "../assests/servicedata.json";

// const ServicePage = () => {
//   const { id } = useParams();
//   const [serviceData, setServiceData] = useState(null);

//   const [expanded, setExpanded] = useState(false);
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `http://172.16.100.109:8282/services/getService/${id}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch service data");
//       }
//       const data = await response.json();
//       setServiceData(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching service data:", error);
//     }
//   };

//   if (!serviceData) {
//     return <div>Loading...</div>;
//   }

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };
//   useEffect(() => {
//     const selectedService = serviceDataJson.find(
//       (service) => service.id === parseInt(id)
//     );
//     setService(selectedService);
//   }, [id]);
//   return (
//     <main className="flex justify-between w-[max-content] relative">
//       <div className="relative">
//         <div
//           style={{ width: "100vw", height: "667px" }}
//           className="absolute bg-black/50"
//         ></div>
//         <img
//           src={serviceData.serviceBgImage}
//           // src={`http://172.16.100.109:8282/services/getService/${serviceData.serviceBgImage}`}
//           style={{ width: "100vw", height: "667px" }}
//           className="w-max-screen"
//         />
//         <div className="absolute top-[50%] left-[3%]">
//           <h1 className="text-white text-7xl">{serviceData.serviceName}</h1>
//           <h2 className="pl-2 py-8 text-xl text-white w-[80%]">
//             {serviceData.serviceDescription}
//           </h2>
//         </div>
//       </div>
//       <div
//         className="custom-accordion"
//         style={{ width: "100%", maxWidth: "700px", marginLeft: "-20px" }}
//       >
//         <h1 className="my-2 ml-0 text-4xl font-bold text-start">
//           {service.serviceName}
//         </h1>
//         <style>{`
//       .custom-accordion .MuiAccordion-root.Mui-expanded {
//         margin: 0;
//       }
//       .custom-accordion .MuiAccordion-root {
//         box-shadow: none;
//         border-left: none;
//         border-right: none;
//         border-bottom: solid 1px gray;
//       }
//       .custom-accordion .MuiAccordionSummary-root {
//         border-radius: 0;
//       }
//       .custom-accordion .MuiAccordionSummary-content {
//         margin: 0;
//       }
//     `}</style>
//         {service.accordions.map((panel) => (
//           <Accordion
//             key={panel.id}
//             expanded={expanded === panel.id}
//             onChange={handleChange(panel.id)}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls={`${panel.id}bh-content`}
//               id={`${panel.id}bh-header`}
//             >
//               <Typography sx={{ width: "33%", flexShrink: 0 }}>
//                 {panel.title}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>{panel.description}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </div>
//       <div>
//         <DynamicPlanCard />
//       </div>
//     </main>
//   );
// };

// export default ServicePage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DynamicPlanCard from "../component/dynamic/dynamicplancard";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  return (
    <main className="flex justify-between w-[max-content] relative">
      <div className="relative">
        {/* Consider handling image loading/error */}
        <img
          src={serviceData.serviceBgImage}
          alt={serviceData.serviceName}
          style={{ width: "100vw", height: "667px" }}
          className="w-max-screen"
        />
        <div className="absolute top-[50%] left-[3%]">
          <h1 className="text-white text-7xl">{serviceData.serviceName}</h1>
          <h2 className="pl-2 py-8 text-xl text-white w-[80%]">
            {serviceData.serviceDescription}
          </h2>
        </div>
      </div>
      <div
        className="custom-accordion"
        style={{ width: "100%", maxWidth: "700px", marginLeft: "-20px" }}
      >
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
      </div>
      <div>
        <DynamicPlanCard />
      </div>
    </main>
  );
};

export default ServicePage;
