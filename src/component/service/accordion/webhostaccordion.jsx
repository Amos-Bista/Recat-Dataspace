import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import webhostaccordion from "../../../assests/accordionJson/webhostaccordion.json";

function WebhostAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="custom-accordion"  style={{ width: "100%", maxWidth: "700px", marginLeft: "-20px"}}>
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
      {webhostaccordion.map((panel) => (
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
  );
}

export default WebhostAccordion;
