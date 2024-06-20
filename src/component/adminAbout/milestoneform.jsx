import React, { useState, useContext } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import { FormContext, FormProvider } from "../about/formcontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MilestoneForm = () => {
  const { addMilestone } = useContext(FormContext);

  // Initialize formState with values from localStorage if available
  const initialFormState = {
    label1: localStorage.getItem("label1") || "Enter years of experience",
    label1Value: localStorage.getItem("label1Value") || "",
    label2: localStorage.getItem("label2") || "Enter satisfied clients number",
    label2Value: localStorage.getItem("label2Value") || "",
    label3: localStorage.getItem("label3") || "Enter valued partners number",
    label3Value: localStorage.getItem("label3Value") || "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, desc } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      [name]: desc,
    });
    localStorage.setItem(name, value); // Update localStorage immediately
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const milestoneData = {
        label1: {
          desc: formState.label1,
          value: parseInt(formState.label1Value),
        },
        label2: {
          desc: formState.label2,
          value: parseInt(formState.label2Value),
        },
        label3: {
          desc: formState.label3,
          value: parseInt(formState.label3Value),
        },
      };

      localStorage.setItem("lastMilestoneData", JSON.stringify(milestoneData));

      // Clear formState after successful submission
      setFormState(initialFormState);

      // Show success toast
      toast.success("Form submitted successfully!", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast.error("Failed to submit form. Please try again later.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <main>
      <FormProvider>
        <div className="flex items-center justify-between">
          <h3 className="mt-12 text-2xl font-[400] text-[#0D5077] text-[34px]">
            Milestone Update
          </h3>
        </div>
        <Box
          alignItems="center"
          justifyContent="center"
          padding={5}
          className="flex justify-center mx-auto mt-12 bg-white rounded-md"
        >
          <form onSubmit={handleFormSubmit}>
            <Grid
              className="w-[50%] flex justify-center mx-auto"
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {formState.label1}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="label1Value"
                  label={formState.label1}
                  variant="outlined"
                  type="number"
                  value={formState.label1Value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {formState.label2}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="label2Value"
                  label={formState.label2}
                  variant="outlined"
                  type="number"
                  value={formState.label2Value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  {formState.label3}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="label3Value"
                  label={formState.label3}
                  variant="outlined"
                  type="number"
                  value={formState.label3Value}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </FormProvider>
    </main>
  );
};

export default MilestoneForm;
