import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Button,
  MenuItem,
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
import axios from "axios";

const Add = ({ fetchData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedServicePath, setSelectedServicePath] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState("Select Link");
  const inputRef = useRef(null);
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchDataa();
  }, []);

  const fetchDataa = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      setRowData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
    setServiceBgImage(null);
    setImagePreview("");
    setSelectedServicePath("");
    setSelectedServiceName("Select Link");
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
      formData.append("servicePath", selectedServicePath);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/createSection`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Hero Section uploaded successfully!");
        closePopUp();
        fetchData();
      } else {
        throw new Error("Failed to upload Hero Section");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleServicePathSelect = (service) => {
    setSelectedServicePath(service.path);
    setSelectedServiceName(service.serviceName);
    setAnchorEl(null); // Close the menu after selecting
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
              <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
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
              <div>
                <Button
                  style={{ backgroundColor: "green", color: "#fff" }}
                  variant="contained"
                  onClick={handleMenuOpen}
                >
                  {selectedServiceName}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {rows.map((service) => (
                    <MenuItem
                      key={service.id}
                      onClick={() => handleServicePathSelect(service)}
                    >
                      {service.serviceName}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
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
          style={{ display: "flex", gap: "200px" }}
        >
          <Button
            variant="contained"
            onClick={closePopUp}
            style={{ backgroundColor: "#FF0000", marginLeft: "53px", marginRight: "auto" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ backgroundColor: "#0c5177", color: "#fff", marginLeft: "auto", marginRight: "56px" }}
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
