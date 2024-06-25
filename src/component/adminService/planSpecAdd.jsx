import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const PlanSpecAdd = ({ id,  }) => {
  const [open, setOpen] = useState(false);
  const [features, setFeatures] = useState([{ id: Date.now(), text: "" }]);
  const [serviceData, setServiceData] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, [id]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_BASE_URL}/services/getService/${id}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch service data");
  //       // fetchData();
  //     }
  //     const data = await response.json();
  //     setServiceData(data);
  //   } catch (error) {
  //     console.error("Error fetching service data:", error);
  //   }
  // };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].text = value;
    setFeatures(updatedFeatures);
  };

  const addFeatureField = () => {
    setFeatures([...features, { id: Date.now(), text: "" }]);
  };

  const removeFeatureField = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("servicePlansId", id);

      features.forEach((feature) => {
        formData.append(`feature`, feature.text);
      });
      // const formDataArray = [];
      // for (const [key, value] of formData.entries()) {
      //   formDataArray.push({ key, value });
      // }

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/specifications/addSpecification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally handle response data here if needed
      // const data = await response.json();
      // console.log("Response data:", data);

      alert("Form submitted successfully!");
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} color="primary" variant="contained">
        Add Specs
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle key={serviceData.id}>
          {serviceData.serviceName}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {features.map((feature, index) => (
            <Grid container spacing={3} key={feature.id}>
              <Grid item xs={8}>
                <TextField
                  label={`Feature ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  type="text"
                  value={feature.text}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFeatureField(index)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={addFeatureField}
            style={{ marginTop: 10 }}
          >
            Add Feature
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PlanSpecAdd;
