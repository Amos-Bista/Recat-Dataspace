import React, { useState, useContext, useEffect } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import { FormContext, FormProvider } from "../about/formcontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MilestoneForm = () => {
  const { addMilestone } = useContext(FormContext);

  // Initialize formState with values from localStorage if available
  const initialFormState = JSON.parse(
    localStorage.getItem("lastMilestoneData")
  ) || {
    count1: "",
    count2: "",
    count3: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    // Save formState to localStorage whenever it changes
    localStorage.setItem("lastMilestoneData", JSON.stringify(formState));
  }, [formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name.startsWith("count") ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMilestone({
        desc: "Years of Experience",
        count: formState.count1,
      });
      await addMilestone({
        desc: "Satisfied Clients",
        count: formState.count2,
      });
      await addMilestone({ desc: "Valued Partners", count: formState.count3 });

      // Clear formState after successful submission
      setFormState({
        count1: "",
        count2: "",
        count3: "",
      });
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
          padding={5}
          className="flex justify-center mx-auto mt-12 bg-white rounded-md"
        >
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Years of experience
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="count1"
                  label="Enter years of experience"
                  variant="outlined"
                  type="number"
                  value={formState.count1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Satisfied Clients
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="count2"
                  label="Enter satisfied clients number"
                  variant="outlined"
                  type="number"
                  value={formState.count2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Valued Partners
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="count3"
                  label="Enter valued partners number"
                  variant="outlined"
                  type="number"
                  value={formState.count3}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
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
