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
import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const ServiceEdit = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [rows, setRows] = useState([]);
  
  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      if (data.length > 0) {
        setTitle(data[0].serviceName);
        setDescription(data[0].serviceDescription);
        setBackgroundImage(data[0].serviceBgImage);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    }
  };

  const handleEdit = async (id) => {
    const formData = new FormData();
    formData.append("serviceName", title);
    formData.append("serviceDescription", description);
    formData.append("serviceBgImage", backgroundImage);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/editServices?id=${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update service");
      }
      toast.success("Edit Successful");
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("Error updating service");
    }
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
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <Grid container spacing={2} key={index}>
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
                  <Typography variant="h6" gutterBottom>
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
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/services/${row.serviceBgImage}`}
                    style={{
                      width: "500px",
                      height: "250px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                  <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </Grid>
              </Grid>
            ))
          ) : (
            <Typography>No data available</Typography>
          )}
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "230px",
            marginRight: "13px",
          }}
        >
          <Button
            color="inherit"
            variant="contained"
            onClick={() => handleEdit(rows.length ? rows[0].id : null)}
          >
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

export default ServiceEdit;
