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
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const   FeaturePlansEdit = ({ title, tiers, price, id, updateRowData }) => {
  const [open, setOpen] = useState(false);
  const [planTitle, setPlanTitle] = useState(title);
  const [planTiers, setPlanTiers] = useState(tiers);
  const [planPrice, setPlanPrice] = useState(price);

  useEffect(() => {
    setPlanTitle(title);
    setPlanTiers(tiers);
    setPlanPrice(price);
  }, [title, tiers, price]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/servicePlans/updateServicePlan/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            servicePlanTitle: planTitle,
            servicePlanTiers: planTiers,
            price: planPrice,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update service plan");
      }
      updateRowData(); // Update parent's data after successful update

      handleClose();
    } catch (error) {
      console.error("Error updating service plan:", error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" variant="contained">
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Features Plans
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Plan Title
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField
                label="Enter Plan title"
                variant="outlined"
                fullWidth
                value={planTitle}
                onChange={(e) => setPlanTitle(e.target.value)}
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
            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField
                label="Enter Plan Tiers"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={planTiers}
                onChange={(e) => setPlanTiers(e.target.value)}
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
            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField
                label="Enter Price"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={planPrice}
                onChange={(e) => setPlanPrice(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "230px",
            marginRight: "13px",
          }}
        >
          <Button color="inherit" variant="contained" onClick={handleUpdate}>
            UPDATE
          </Button>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#0c5177", color: "#fff" }}
            variant="contained"
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeaturePlansEdit;
