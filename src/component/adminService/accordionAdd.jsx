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
  import React, { useState } from "react";
  import IconButton from "@mui/material/IconButton";
  import CloseIcon from "@mui/icons-material/Close";
  
  const AccordionAdd = () => {
    const [open, setOpen] = useState(false);
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");
    const [response, setResponse] = useState("");
    const functionOnPopUp = () => {
      setOpen(true);
    };
    const closePopUp = () => {
      setOpen(false);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          //   "http://172.16.100.109:8282/contacts/addContacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tittle, description }),
          }
        );
  
        if (response.ok) {
          setResponse("Contact registeresd"); // Set the response message
          alert("Form submitted successfully!"); // Alert for successful submission
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error:", error);
        setResponse("Error posting data.");
        alert("Error submitting form. Please try again."); // Alert for error
      }
    };
  
    return (
      <>
        <Button onClick={functionOnPopUp} color="primary" variant="contained">
          Add New +
        </Button>
        <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
          <DialogTitle style={{ color: "#0c5177" }}>
            Plans Information
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
                  Tittle:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Enter Tittle"
                  variant="outlined"
                  fullWidth
                  value={tittle}
                  onChange={(e) => setTittle(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Description
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Enter Description"
                  variant="outlined"
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
             
              
            </Grid>
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              gap: "200px",
              marginRight: "13px",
            }}
          >
            <Button color="inherit" variant="contained" onClick={closePopUp}>
              UNPUBLISH
            </Button>
            <Button
              onClick={handleSubmit}
              style={{ backgroundColor: "#0c5177", color: "#fff" }}
              variant="contained"
            >
              PUBLISH
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default AccordionAdd;
  