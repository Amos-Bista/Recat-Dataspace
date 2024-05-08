import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Edit = () => {
  const [open, setOpen] = useState(false);
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };
  return (
    <>
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
                Username
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField label="Enter username" variant="outlined" fullWidth />
            </Grid>
            <Grid></Grid>

            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <input
                accept="image/*"
                id="image-upload"
                multiple
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="image-upload">
                <img
                  src=""
                  alt="Upload"
                  style={{
                    cursor: "pointer",
                    maxWidth: "100%",
                    maxHeight: "400px",
                  }}
                />
              </label>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="flex ">
          <Button color="success" variant="contained">
            UPDATE
          </Button>
          <Button onClick={closePopUp} color="error" variant="contained">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Edit;
