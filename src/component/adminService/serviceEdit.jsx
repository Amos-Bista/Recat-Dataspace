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

const ServiceEdit = ({ id, data }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [editError, setEditError] = useState(null);
  const [serviceSubName, setServiceSubName] = useState("");
  const [serviceSubImage, setServiceSubImage] = useState(null);
  const inputRef = useRef(null);
  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
    // Reset form values on close
    setTitle("");
    setDescription("");
    setBackgroundImage("");
    setServiceSubImage(null);
    setImage(null);
    setEditError(null);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageSubChange = (event) => {
    setServiceSubImage(event.target.files[0]);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageSubClick = () => {
    inputRef.current.click();
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

  // const handleEdit = async () => {
  //   setLoading(true);
  //   setEditError(null);
  //   const formData = new FormData();
  //   formData.append("serviceName", title);
  //   formData.append("serviceDescription", description);
  //   formData.append("serviceBgImage", image);
  //   formData.append("serviceSubName", serviceSubName);
  //   formData.append("serviceSubImage", serviceSubImage);

  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_BASE_URL}/services/update/${id}`,
  //       {
  //         method: "PUT",
  //         body: formData,
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to update service");
  //     }
  //     toast.success("Edit Successful");
  //     closePopUp();
  //   } catch (error) {
  //     console.error("Error updating service:", error);
  //     toast.error("Error updating service");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleEdit = async () => {
    setLoading(true);
    setEditError(null);
    const formData = new FormData();
    formData.append("serviceName", title);
    formData.append("serviceDescription", description);
    formData.append("serviceBgImage", image);
    formData.append("serviceSubName", serviceSubName);
    formData.append("serviceSubImage", serviceSubImage);
  
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/update/${id}`,
        {
          method: "PUT",
          body: formData,
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
                    src={`${process.env.REACT_APP_API_BASE_URL}/services/${backgroundImage}`}
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
                  className="hidden"
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
                    src={`${process.env.REACT_APP_API_BASE_URL}/services/${serviceSubImage}`}
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
                  ref={inputRef}
                  className="hidden"
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
