import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MilestoneForm from "./MilestoneForm";
import Milestone from "./milestone";

const ExperienceContainer = () => {
  const [formData, setFormData] = useState({
    yearsOfExperience: "",
    satisfiedClients: "",
    valuedPartner: "",
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" gutterBottom>
        Experience Details
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <MilestoneForm onSubmit={handleFormSubmit} formData={formData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Display Experience
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Milestone
                  desc="Years of Experience"
                  limit={parseInt(formData.yearsOfExperience) || 0}
                  setFormData={setFormData}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Milestone
                  desc="Satisfied Clients"
                  limit={parseInt(formData.satisfiedClients) || 0}
                  setFormData={setFormData}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Milestone
                  desc="Valued Partner"
                  limit={parseInt(formData.valuedPartner) || 0}
                  setFormData={setFormData}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceContainer;
