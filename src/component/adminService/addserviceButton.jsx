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

const AddServiceButton = ({ addData }) => {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null); // Updated to null initially

  const [response, setResponse] = useState("");
  const [showFields, setShowFields] = useState(false);

  const handleAddAccordion = () => {
    setShowFields(true);
  };
  const handleDone = () => {
    setShowFields(false);
  };

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setServiceName(e.target.value);
  const handleDescriptionChange = (e) => setServiceDescription(e.target.value);
  const handleImageChange = (event) => {
    setServiceBgImage(event.target.files[0]);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const formData = new FormData();
  //       formData.append("serviceName", serviceName);
  //       formData.append("serviceDescription", serviceDescription);
  //       formData.append("serviceBgImage", serviceBgImage);

  //       const response = await fetch(
  //         "http://172.16.100.109:8282/services/addServices",
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );

  //       if (response.ok) {
  //         setResponse("Contact registered");
  //         alert("Form submitted successfully!");
  //       } else {
  //         throw new Error("Network response was not ok");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setResponse("Error posting data.");
  //       alert("Error submitting form. Please try again.");
  //     }
  //     setOpen(false);
  //   };

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Button
        onClick={functionOnPopUp}
        style={{ backgroundColor: "green", color: "white" }}
        variant="contained"
      >
        Add New Service Page +
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle
          style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
        >
          Create New Service Page
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
          <section className="px-2 border-2 rounded-sm border-sky-900/30">
            <Typography
              variant="h6"
              gutterBottom
              className="pt-4 text-[#0c5177] text-center"
            >
              HeroSection
            </Typography>
            <Grid container spacing={2} padding={5}>
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
                <TextField
                  label="Enter description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
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
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <Button onClick={handleImageClick} variant="outlined">
                  Choose File
                </Button>
              </Grid>
            </Grid>
          </section>
          {/* Accordion */}
          <section className="px-2 mt-4 border-2 rounded-sm border-sky-900/30">
            <Typography
              variant="h6"
              gutterBottom
              className="pt-4 text-[#0c5177] text-center"
            >
              Accordion
            </Typography>
            <div className="flex justify-end w-full">
              <Button
                // onClick={handleSubmit}
                onClick={handleAddAccordion}
                style={{
                  backgroundColor: "#0c5177",
                  color: "#fff",
                }}
                variant="contained"
              >
                Add Accordion
              </Button>
            </div>
            <section>
              <h1 className="ml-12">Accordion View</h1>
              <div className="px-2 py-2 mx-10 mt-2 border-2">
                <ul>
                  <li>1.</li>
                </ul>
              </div>
            </section>
            {showFields && (
              <Grid container spacing={2} padding={5}>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Title
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Enter title" variant="outlined" fullWidth />
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
                    rows={2}
                  />
                </Grid>
              </Grid>
            )}
            <div className="flex justify-end w-full">
              <Button
                // onClick={handleSubmit}

                style={{
                  backgroundColor: "#0c5177",
                  color: "#fff",
                }}
                onClick={handleDone}
                variant="contained"
              >
                Done
              </Button>
            </div>
          </section>
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
            UNPUBLISH
          </Button>
          <Button
            // onClick={handleSubmit}
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

export default AddServiceButton;
