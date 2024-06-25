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
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const FeaturePlansAdd = ({ addfeaturePlan }) => {
  const [open, setOpen] = useState(false);
  const [servicePlanTitle, setServicePlanTitle] = useState("");
  const [servicePlanTiers, setServicePlanTiers] = useState("");
  const [price, setPrice] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState(""); // State to store the selected billing period
  const { id } = useParams();

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setServicePlanTitle(e.target.value);
  const handleTiersChange = (e) => setServicePlanTiers(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSubscriptionPlanChange = (event) => {
    setSubscriptionPlan(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!servicePlanTitle || !servicePlanTiers || !price || !subscriptionPlan) {
      toast.error("All fields are required!");
      return;
    }

    const payload = {
      servicePlanTitle,
      servicePlanTiers,
      price,
      subscriptionPlan, // Include the billing period in the payload
      serviceId: id,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/servicePlans/addServicePlans`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        addfeaturePlan();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form. Please try again.");
    }
    setOpen(false);
  };

  useEffect(() => {
    // Any additional effect logic if required
  }, [id]);

  return (
    <div>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        Add New
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
                Plan Title
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Plan Title"
                variant="outlined"
                fullWidth
                onChange={handleTitleChange}
                value={servicePlanTitle}
                error={!servicePlanTitle}
                helperText={!servicePlanTitle && "Plan Title is required"}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Plan Tiers
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Plan Tiers"
                variant="outlined"
                fullWidth
                onChange={handleTiersChange}
                value={servicePlanTiers}
                error={!servicePlanTiers}
                helperText={!servicePlanTiers && "Plan Tiers are required"}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Price
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Price"
                variant="outlined"
                fullWidth
                onChange={handlePriceChange}
                value={price}
                error={!price}
                helperText={!price && "Price is required"}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Billing Period
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <RadioGroup
                value={subscriptionPlan}
                onChange={handleSubscriptionPlanChange}
                error={!subscriptionPlan}
              >
                <FormControlLabel
                  value="Monthly"
                  control={<Radio />}
                  label="Monthly"
                />
                <FormControlLabel
                  value="Yearly"
                  control={<Radio />}
                  label="Yearly"
                />
              </RadioGroup>
              {!subscriptionPlan && (
                <Typography color="error" variant="body2">
                  Billing period is required
                </Typography>
              )}
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

export default FeaturePlansAdd;
