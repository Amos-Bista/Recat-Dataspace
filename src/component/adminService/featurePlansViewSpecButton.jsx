import React, { useState, useEffect } from "react";
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

const FeaturePlansViewSpecButton = ({ apiEndpoint, id, rowData }) => {
  const [open, setOpen] = useState(false);
  const [rowdata, setRowData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/services/getServices/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setRowData(data);
        } catch (error) {
          setError(error.message);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [open, apiEndpoint]);

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
          {rowData && (
            <div>
              {/* Replace with your data structure */}
              {/* <Typography variant="h6">Feature: {rowData[id].feature}</Typography> */}
              {/* <Typography variant="body1">
                Service Plan ID: {rowData[id].servicePlansId}
              </Typography> */}
              {/* Add more fields as needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          {/* <Box variant="contained">
            <PlanSpecAdd id={id} />
          </Box>   */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeaturePlansViewSpecButton;
