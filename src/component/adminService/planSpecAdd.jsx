import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const PlanSpecAdd = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [feature, setFeature] = useState("");

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handlefeatureChange = (e) => setFeature(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      feature: feature,
      servicePlanId: id,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/specifications/addSpecification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        Add Spec
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle
          style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
        >
          Hero Section
          <IconButton
            aria-label="close"
            onClick={closePopUp}
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
          <Grid container spacing={4} padding={5}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Feature
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Plan Title"
                variant="outlined"
                fullWidth
                onChange={handlefeatureChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "200px",
          }}
        >
          <Button
            variant="contained"
            onClick={closePopUp}
            style={{
              backgroundColor: "#FF0000",
              marginLeft: "53px",
              marginRight: "auto",
            }}
          >
            UNPUBLISH
          </Button>
          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#0c5177",
              color: "#fff",
              marginLeft: "auto",
              marginRight: "56px",
            }}
            variant="contained"
          >
            PUBLISH
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PlanSpecAdd;
