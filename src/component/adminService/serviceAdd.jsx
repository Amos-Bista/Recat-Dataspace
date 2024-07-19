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
import { toast } from "react-toastify";
import TextFieldEditor from "../inputTextEditor/textFieldEditor";

const ServiceAdd = ({ addData }) => {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceSubName, setServiceSubName] = useState(null);
  const [serviceSubImage, setServiceSubImage] = useState(null);
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewSubImage, setPreviewSubImage] = useState(null);

  const mainImageInputRef = useRef(null);
  const subImageInputRef = useRef(null);

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setServiceName(e.target.value);
  const handleDescriptionChange = (value) => setServiceDescription(value);
  const handleSubNameChange = (e) => setServiceSubName(e.target.value);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setServiceBgImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setServiceSubImage(file);
      setPreviewSubImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("serviceName", serviceName);
      formData.append("serviceDescription", serviceDescription);
      formData.append("serviceBgImage", serviceBgImage);
      formData.append("serviceSubName", serviceSubName);
      formData.append("serviceSubImage", serviceSubImage);

      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/addServices`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      // const responseData = await response.json();
      // console.log('Response Data:', responseData);
      if (response.ok) {
        toast.success("Page Added Successfully");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      } else {
        toast.error("An error occurred");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setOpen(false);
  };

  const handleImageClick = () => {
    mainImageInputRef.current.click();
  };

  const handleSubImageClick = () => {
    subImageInputRef.current.click();
  };

  return (
    <>
      <div className=" justify-between mt-[10px] mb-9">
        <h3 className="text-2xl font-[400] text-[#0D5077]">Service Page</h3>
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
              <TextFieldEditor
                // value={serviceDescription}
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
                ref={mainImageInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Button onClick={handleImageClick} variant="outlined">
                Choose File
              </Button>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Selected"
                  style={{ marginTop: "1rem", width: "100%" }}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Sub-Title
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter sub-title"
                variant="outlined"
                fullWidth
                onChange={handleSubNameChange}
              />
              {/* <TextFieldEditor
                  placeHolder={serviceSubName}
                  // value={serviceSubName}   
                  label="Enter sub-title"
                  onChange={(newContent) => setServiceSubName(newContent)}
                /> */}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Sub Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                ref={subImageInputRef}
                style={{ display: "none" }}
                onChange={handleSubImageChange}
              />
              <Button onClick={handleSubImageClick} variant="outlined">
                Choose File
              </Button>
              {previewSubImage && (
                <img
                  src={previewSubImage}
                  alt="Selected"
                  style={{ marginTop: "1rem", width: "100%" }}
                />
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ display: "flex", gap: "200px" }}>
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
