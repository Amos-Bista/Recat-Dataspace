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

const AboutHeroEdit = ({ aboutDetails, handleEditAbout }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(aboutDetails.title || "");
  const [description, setDescription] = useState(
    aboutDetails.description || ""
  );
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    aboutDetails.backgroundImage
      ? `${process.env.REACT_APP_API_BASE_URL}/aboutUs/${aboutDetails.backgroundImage}`
      : null
  );
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (backgroundImage) {
      formData.append("backgroundImage", backgroundImage);
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/update/${aboutDetails.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        alert("AboutUs updated successfully!");
        handleEditAbout();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating AboutUs. Please try again.");
    }
    setOpen(false);
  };

  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBackgroundImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleImageClick = () => {
    inputRef.current.click();
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
                Title
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <TextField
                label="Enter title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="background"
                  style={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                />
              )}
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
            gap: "230px",
            marginRight: "13px",
          }}
        >
          <Button onClick={handleSubmit} color="inherit" variant="contained">
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

export default AboutHeroEdit;
