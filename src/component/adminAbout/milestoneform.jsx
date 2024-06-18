import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";

const MilestoneForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    desc1: "",
    desc2: "",
    desc3: "",
    count1: 0,
    count2: 0,
    count3: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // Pass formData to parent component
      // Optionally, you can reset the form after submission
      setFormData({
        desc1: "",
        desc2: "",
        desc3: "",
        count1: "",
        count2: "",
        count3: "",
      });
      console.log(formData);
    }
  };

  return (
    <Box container spacing={4} padding={5}>
      <Typography variant="h4" gutterBottom>
        Milestone Form
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={4} padding={5}>
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