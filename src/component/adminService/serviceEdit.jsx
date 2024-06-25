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
import { idID } from "@mui/material/locale";

const ServiceEdit = ({ id, servicePlan }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [editError, setEditError] = useState(null);

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
    setImage(null);
    setEditError(null);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data.id);
      if (data.length > 0) {
        setTitle(data[0].serviceName);
        setDescription(data[0].serviceDescription);
        setBackgroundImage(data[0].serviceBgImage);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchError("Failed to fetch data. Please try again.");
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    setLoading(true);
    setEditError(null);
    const formData = new FormData();
    formData.append("serviceName", title);
    formData.append("serviceDescription", description);
    formData.append("serviceBgImage", image);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/update/${servicePlan.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update service");
      }
      toast.success("Edit Successful");
      // Refresh data after successful edit
      // fetchData();
      closePopUp();
    } catch (error) {
      // console.error("Error updating service:", error);
      // setEditError("Error updating service. Please try again.");
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
