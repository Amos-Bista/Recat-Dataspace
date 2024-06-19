import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ServiceEdit = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <button></button>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        EDIT
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle>
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Title
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField label="Enter title" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Description
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField
                label="Enter description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid onClick={handleImageClick} item xs={6}>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  style={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              ) : (
                <img
                  src="/editBackground.png"
                  style={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              )}
              <input
                type="file"
                ref={inputRef}
                className="hidden"
                onChange={handleImageChange}
              />{" "}
              {/* Correct usage of useRef */}
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
          <Button color="inherit" variant="contained">
            UPDATE
          </Button>
          <Button
            onClick={closePopUp}
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

export default ServiceEdit;
