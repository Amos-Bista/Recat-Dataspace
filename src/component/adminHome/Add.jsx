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
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import HeroLearnMore from "./HeroSectionLearnMoreButton";

const Add = ({ addData, fetchData }) => {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedServicePath, setSelectedServicePath] = useState(""); // State to hold selected service path
  const inputRef = useRef(null);

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
    setServiceBgImage(null);
    setImagePreview("");
    setSelectedServicePath(""); // Clear selected service path on close
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setServiceBgImage(imageFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", serviceName);
      formData.append("description", serviceDescription);
      formData.append("backgroundImage", serviceBgImage);
      formData.append("servicePath", selectedServicePath); // Add selected service path to form data

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/createSection`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Hero Section uploaded successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        closePopUp();
        fetchData();
      } else {
        throw new Error("Failed to upload Hero Section");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleServicePathSelect = (path) => {
    setSelectedServicePath(path);
    console.log("Service path", { selectedServicePath } );
  };

  return (
    <>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        Add New +
      </Button>
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
                onChange={(e) => setServiceName(e.target.value)}
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
                onChange={(e) => setServiceDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Link
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <HeroLearnMore onServiceClick={handleServicePathSelect} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                id="imageInput"
                ref={inputRef}
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Selected"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}
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
            Cancel
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
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Add;
