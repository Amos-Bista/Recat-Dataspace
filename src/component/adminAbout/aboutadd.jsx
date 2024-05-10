import React, { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AboutAdd = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(null);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [response, setResponse] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("logo", logo);
      formData.append("title", title);
      formData.append("paragraph", paragraph);

      const response = await fetch(
        "http://172.16.100.109:8282/aboutUs/addAboutUs",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResponse("Contact registered");
        alert("Form submitted successfully!");
        handleClose(); // Close the dialog after successful submission
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error posting data.");
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" variant="contained">
        Add New +
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle style={{ color: "#0c5177" }}>
          Card Information
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
          <Grid container spacing={4} padding={5}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Logo:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setLogo(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Title:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Paragraph:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Paragraph"
                variant="outlined"
                fullWidth
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "200px",
            marginRight: "13px",
          }}
        >
          <Button color="inherit" variant="contained" onClick={handleClose}>
            UNPUBLISH
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ backgroundColor: "#0c5177", color: "#fff" }}
            variant="contained"
          >
            PUBLISH
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AboutAdd;
