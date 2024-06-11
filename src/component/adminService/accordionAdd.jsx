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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
        `${process.env.REACT_APP_API_BASE_URL}/serviceDesc/addDescription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between w-full">
          <h1 className=" text-2xl font-[400] text-[#383698]">Accordions</h1>
          <Button onClick={functionOnPopUp} color="primary" variant="contained">
            Add Accordion +
          </Button>
        </div>
        <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
          <DialogTitle
            style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
          >
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
                  label="Enter Title"
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
            }}
          >
            <Button
              color="inherit"
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
      </div>
    </>
  );
};

export default AccordionAdd;
