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

const Edit = ({ onEdit }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null); // Initialize as null
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/allSections`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.success("herosection successfully fetched");
      }
      const data = await response.json();
      console.log(data);
      setTitle(data[0]?.title);
      setDescription(data[0]?.description);
      setBackgroundImage(data[0]?.backgroundImage);
      setRows(data); // Store all data rows
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error in network");
    }
  };

  // const handleEdit = async (id) => {
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("backgroundImage", backgroundImage);

  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_BASE_URL}/services/editServices?id=${id}`,
  //       {
  //         method: "PUT",
  //         body: formData,
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to update service");
  //     }
  //     toast.success("Edit Successful");
  //   } catch (error) {
  //     console.error("Error updating service:", error);
  //     toast.error("Error updating service");
  //   }
  // };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleEdit = async (id, index) => {
    const formData = new FormData();
    formData.append("title", title || "");
    formData.append("description", description || "");
    formData.append("backgroundImage", backgroundImage || "");

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/editSection?id=${id}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        toast.success("Success Updated");
        // const updatedRows = [...rows];
        // updatedRows.splice(index, 1);
        // setRows(updatedRows);
      } else {
        toast.success("Edit Sucessful");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const getImageSrc = () => {
    if (image) {
      return URL.createObjectURL(image);
    }
    if (backgroundImage) {
      return `${process.env.REACT_APP_API_BASE_URL}/heroSection/${backgroundImage}`;
    }
    return "/editBackground.png"; // Default image
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                fullWidth
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Enter description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6} onClick={handleImageClick}>
              <img
                src={getImageSrc()}
                alt="Hero Section"
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
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
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
          <Button color="inherit" variant="contained">
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

export default Edit;
