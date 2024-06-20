import React, { useState, useRef } from "react";
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

const ServiceAdd = ({ addData }) => {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null);

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setServiceName(e.target.value);
  const handleDescriptionChange = (e) => setServiceDescription(e.target.value);
  const handleImageChange = (event) => {
    setServiceBgImage(event.target.files[0]);
    console.log("Selected file:", event.target.files[0]); // Log selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("serviceName", serviceName);
      formData.append("serviceDescription", serviceDescription);
      formData.append("serviceBgImage", serviceBgImage);

      // Log FormData contents
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/addServices`,
        {
          method: "POST",
          body: formData,
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

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className=" flex flex-row justify-between mt-[10px] mb-9 ">
        <h3 className=" text-2xl font-[400] text-[#0D5077] ">Service Page</h3>
        <Button onClick={functionOnPopUp} color="primary" variant="contained">
          Add New
        </Button>
      </div>
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
                Title
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter title"
                variant="outlined"
                fullWidth
                onChange={handleTitleChange}
              />
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
            <Grid item xs={6}>
              <TextField
                label="Enter description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Button onClick={handleImageClick} variant="outlined">
                Choose File
              </Button>
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
    </>
  );
};

export default ServiceAdd;
