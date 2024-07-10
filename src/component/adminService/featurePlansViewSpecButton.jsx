import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";
import PlanSpecAdd from "./planSpecAdd";

const FeaturePlansViewSpecButton = ({ id, data }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const servicePlan = data.servicePlans.find((plan) => plan.id === id);

  return (
    <>
      <Button
        style={{ backgroundColor: "green", color: "white" }}
        variant="contained"
        onClick={handleOpen}
      >
        View
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Specification Details</DialogTitle>
        <DialogContent>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">Error: {error}</Typography>}
          {servicePlan ? (
            <div>
              <Typography variant="h6">
                Plan Name: {servicePlan.servicePlanTitle}
              </Typography>
              {servicePlan.specifications.length > 0 ? (
                servicePlan.specifications.map((spec, specIndex) => (
                  <Typography key={specIndex} variant="body1">
                    Feature {specIndex + 1} : {spec.feature}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1">
                  No specifications available
                </Typography>
              )}
              {/* Add other fields here as needed */}
            </div>
          ) : (
            <Typography>No service plan found</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Box variant="contained">
            <PlanSpecAdd id={id} />
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeaturePlansViewSpecButton;
