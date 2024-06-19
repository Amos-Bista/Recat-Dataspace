import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";

const MilestoneForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    desc1: "",
    desc2: "",
    desc3: "",
    count1: null,
    count2: 0,
    count3: 0,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.startsWith("count") ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // Call the onSubmit function with formData
      setSubmittedData(formData); // Update submittedData with formData

      // Store formData in localStorage as lastMilestoneData
      localStorage.setItem("lastMilestoneData", JSON.stringify(formData));

      setFormData({
        desc1: "",
        desc2: "",
        desc3: "",
        count1: 0, // Reset count to 0
        count2: 0,
        count3: 0,
      });
    }
  };

  return (
    <Box padding={5}>
      <Typography variant="h4" gutterBottom>
        Milestone Form
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Description 1
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="desc1"
              label="Enter description"
              variant="outlined"
              value={formData.desc1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Count 1
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="count1"
              label="Enter count"
              variant="outlined"
              type="number"
              value={formData.count1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Description 2
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="desc2"
              label="Enter description"
              variant="outlined"
              value={formData.desc2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Count 2
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="count2"
              label="Enter count"
              variant="outlined"
              type="number"
              value={formData.count2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Description 3
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="desc3"
              label="Enter description"
              variant="outlined"
              value={formData.desc3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Count 3
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="count3"
              label="Enter count"
              variant="outlined"
              type="number"
              value={formData.count3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MilestoneForm;
