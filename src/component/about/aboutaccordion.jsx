// import React, { useState, useEffect } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const AboutAccordion = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [expandedDatas, setExpandedDatas] = useState([]);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
//       );
//       if (!response.ok) {
//         console.log("fetch Sucess");
//       }
//       const data = await response.json();
//       setExpandedDatas(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div
//       className="custom-accordion"
//       style={{ width: "100%", maxWidth: "700px" }}
//     >
//       <style>{`
//                 .custom-accordion .MuiAccordion-root.Mui-expanded {
//                     margin: 0;
//                 }
//                 .custom-accordion .MuiAccordion-root {
//                     box-shadow: none;
//                     border-left: none;
//                     border-right: none;
//                     border-bottom: solid 1px gray;
//                 }
//                 .custom-accordion .MuiAccordionSummary-root {
//                     border-radius: 0;
//                 }
//                 .custom-accordion .MuiAccordionSummary-content {
//                     margin: 0;
//                 }
//             `}</style>
//       {expandedDatas.length > 0 && expandedDatas[0].aboutUsAccordions ? (
//         expandedDatas[0].aboutUsAccordions.map((expandedData) => (
//           <Accordion
//             key={expandedData.id}
//             expanded={expanded === expandedData.id}
//             onChange={handleChange(expandedData.id)}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls={`${expandedData.id}bh-content`}
//               id={`${expandedData.id}bh-header`}
//             >
//               <img
//                 src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${expandedData.logo}`}
//                 alt={expandedData.title}
//                 style={{ marginRight: "10px", width: "30px", height: "30px" }}
//               />
//               <Typography sx={{ width: "100%", flexShrink: 0 }}>
//                 {expandedData.title}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>{expandedData.description}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))
//       ) : (
//         <Typography>No data available</Typography>
//       )}
//     </div>
//   );
// };

// export default AboutAccordion;

import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedDatas, setExpandedDatas] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );

      const data = await response.json();
      setExpandedDatas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="custom-accordion"
      style={{ width: "100%%", maxWidth: "700px" }}
    >
      <style>{`
                .custom-accordion .MuiAccordion-root.Mui-expanded {
                    margin: 0;
                }
                .custom-accordion .MuiAccordion-root {
                    box-shadow: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: solid 1px gray;
                }
                .custom-accordion .MuiAccordionSummary-root {
                    border-radius: 0;
                }
                .custom-accordion .MuiAccordionSummary-content {
                    margin: 0;
                }
            `}</style>
      {expandedDatas.length > 0 && expandedDatas[0].aboutUsAccordions ? (
        expandedDatas[0].aboutUsAccordions.map((expandedData) => (
          <Accordion
            key={expandedData.id}
            expanded={expanded === expandedData.id}
            onChange={handleChange(expandedData.id)}
            style={{ width: "900px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${expandedData.id}bh-content`}
              id={`${expandedData.id}bh-header`}
              className="flex align-middle "
            >
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${expandedData.logo}`}
                alt={expandedData.title}
                style={{ marginRight: "10px", width: "30px", height: "30px" }}
              />
              <Typography variant="h5" sx={{ width: "100%", flexShrink: 0 }}>
                {expandedData.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" className="pl-8">
                {" "}
                {expandedData.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography>No data available</Typography>
      )}
    </div>
  );
};

export default AboutAccordion;
