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
  const [link, setLink] = useState("");
  const [servicePlanTiers, setServicePlanTiers] = useState("");
  const [price, setPrice] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState(""); // State to store the selected billing period
  const { id } = useParams();
  const [errors, setErrors] = useState({
    servicePlanTitle: "",
    servicePlanTiers: "",
    price: "",
    subscriptionPlan: "",
    link: "",
  });

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    // Validate to accept only letters and spaces
    const validatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    setServicePlanTitle(validatedValue);
    validateField("servicePlanTitle", validatedValue);
  };

  const handleLinkChange = (event) => {
    const value = event.target.value;
    setLink(value);
    validateField("link", value);
  };

  const handleTiersChange = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z\s]/g, "");;
    setServicePlanTiers(value);
    validateField("servicePlanTiers", value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.replace(/[^1-9\s]/g, "");;
    setPrice(value);
    validateField("price", value);
  };

  const handleSubscriptionPlanChange = (event) => {
    const value = event.target.value;
    setSubscriptionPlan(value);
    validateField("subscriptionPlan", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const formValid = Object.keys(errors).every((key) => errors[key] === "");

    if (!formValid) {
      toast.error("Please fill out all required fields correctly!");
      return;
    }

    const payload = {
      servicePlanTitle,
      servicePlanTiers,
      price,
      link,
      subscriptionPlan,
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

  const validateField = (name, value) => {
    let error;
    switch (name) {
      case "servicePlanTitle":
        error = value ? "" : "Plan Title is required";
        break;
      case "servicePlanTiers":
        error = value ? "" : "Plan Tiers are required";
        break;
      case "price":
        error = value ? "" : "Price is required";
        break;
      case "subscriptionPlan":
        error = value ? "" : "Billing period is required";
        break;
      case "link":
        error = validateURL(value) ? "" : "Please enter a valid URL";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    return error;
  };

  const validateURL = (url) => {
    // Regular expression to validate URL
    const pattern = new RegExp(
      /^(ftp|http|https):\/\/[^ "]+$/
    );
    return pattern.test(url);
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
          Feature Plans
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
                type="text"
                onChange={handleTitleChange}
                value={servicePlanTitle}
                error={!!errors.servicePlanTitle}
                helperText={errors.servicePlanTitle}
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
                error={!!errors.servicePlanTiers}
                helperText={errors.servicePlanTiers}
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
                error={!!errors.price}
                helperText={errors.price}
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
                error={!!errors.subscriptionPlan}
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
              {errors.subscriptionPlan && (
                <Typography color="error" variant="body2">
                  {errors.subscriptionPlan}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Link
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Copy and paste link"
                variant="outlined"
                fullWidth
                onChange={handleLinkChange}
                value={link}
                error={!!errors.link}
                helperText={errors.link}
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

export default FeaturePlansAdd;
