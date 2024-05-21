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
  const [backgroundImage, setBackgroundImage] = useState(
    aboutDetails.backgroundImage || ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://172.16.100.109:8282/aboutUs/update/${aboutDetails.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, backgroundImage }),
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
      alert("Error updating Aboutus. Please try again.");
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
    setBackgroundImage(event.target.files[0]);
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
              <TextField
                label="Enter title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
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
            <Grid onClick={handleImageClick} item xs={6}>
              {backgroundImage ? (
                <img
                  src={`http://172.16.100.109:8282/aboutUs/${aboutDetails.backgroundImage}`}
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
