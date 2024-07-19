import React, { useState, useRef, useEffect } from "react";
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
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const ServiceEdit = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [backgroundimagePreview, setBackgroundImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [editError, setEditError] = useState(null);
  const [serviceSubName, setServiceSubName] = useState("");
  const [serviceSubImage, setServiceSubImage] = useState(null);
  const [serviceSubImagePreview, setServiceSubImagePreview] = useState("");
  const inputRef = useRef(null);
  const subImageRef = useRef(null);
  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
    // Reset form values on close
    setTitle("");
    setDescription("");
    setServiceSubImage(null);
    setServiceSubImagePreview("");
    setBackgroundImage(null);
    setBackgroundImagePreview("");
    setEditError(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackgroundImage(file);
      setBackgroundImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageSubChange = (event) => {
    const file = event.target.files[0];
    if (file) { 
      setServiceSubImage(file);
      setServiceSubImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageSubClick = () => {
    subImageRef.current.click();
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      const service = data.find((item) => item.id === id);
      console.log("id", id);

      if (service) {
        setTitle(service.serviceName);
        setDescription(service.serviceDescription);
        setBackgroundImage(service.serviceBgImage);
        setServiceSubImage(service.serviceSubImage);
        setServiceSubName(service.serviceSubName);
        console.log("Service Name:", service.serviceName);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    setLoading(true);
    setEditError(null);
  
    const formData = new FormData();
  
    // Append non-file fields
    if (title) formData.append("serviceName", title);
    if (description) formData.append("serviceDescription", description);
    if (serviceSubName) formData.append("serviceSubName", serviceSubName);
  
    // Append images
    if (backgroundImage) {
      formData.append("serviceBgImage", backgroundImage);
    } else {
      // Append the current background image if no new image is selected
      if (backgroundimagePreview) {
        formData.append("serviceBgImage", backgroundimagePreview);
      } else {
        // If there's no background image at all
        formData.append("serviceBgImage", "");
      }
    }
  
    if (serviceSubImage) {
      formData.append("serviceSubImage", serviceSubImage);
    } else {
      // Append the current service sub image if no new image is selected
      if (serviceSubImagePreview) {
        formData.append("serviceSubImage", serviceSubImagePreview);
      } else {
        // If there's no service sub image at all
        formData.append("serviceSubImage", "");
      }
    }
  
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/update/${id}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            // "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to update service");
      }
  
      toast.success("Edit Successful");
  
      // Fetch updated data after successful update
      await fetchData(id); // Assuming fetchData fetches the updated data
  
      closePopUp();
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("Error updating service");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        EDIT
      </Button>

      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle>
          Edit Service
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
          {loading && <CircularProgress />}
          {fetchError && <Typography color="error">{fetchError}</Typography>}
          {!loading && !fetchError && (
            <Grid container spacing={2}>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
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
                <div
                  className="flex justify-center mx-auto"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                >
                  <img
                    src={
                      backgroundimagePreview ||
                      `${process.env.REACT_APP_API_BASE_URL}/services/${backgroundImage}`
                    }
                    style={{
                      width: "420px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "1px",
                    }}
                    alt="Service Background"
                  />
                </div>
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Sub Title
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Enter subtitle"
                  variant="outlined"
                  fullWidth
                  value={serviceSubName}
                  onChange={(e) => setServiceSubName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  SubImage
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div
                  className="flex justify-center mx-auto"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleImageSubClick}
                >
                  <img
                    src={
                      serviceSubImagePreview ||
                      `${process.env.REACT_APP_API_BASE_URL}/services/${serviceSubImage}`
                    }
                    style={{
                      width: "420px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "1px",
                    }}
                    alt="Service Sub Background"
                  />
                </div>
                <input
                  type="file"
                  ref={subImageRef}
                  style={{ display: "none" }}
                  onChange={handleImageSubChange}
                />
              </Grid>
            </Grid>
          )}
          {editError && <Typography color="error">{editError}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleEdit}
            variant="contained"
            disabled={loading}
            style={{
              backgroundColor: "#0c5177",
              color: "#fff",
            }}
          >
            {loading ? "Updating..." : "UPDATE"}
          </Button>
          <Button
            onClick={closePopUp}
            variant="contained"
            disabled={loading}
            style={{
              backgroundColor: "#757575",
              color: "#fff",
            }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceEdit;
