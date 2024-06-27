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
import { toast } from "react-toastify";

const ValuableclientAdd = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState(null);
  const [response, setResponse] = useState("");

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };
  // const reloadPage = () => {
  //   window.location.reload();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("logo", logo);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/client/addClient`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        toast.success("Clients Added successfully");
        console.log(response);
        closePopUp(true);
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
        <DialogTitle
          style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
        >
          Client Information
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
                Client's Name
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Client's Name"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Client's Logo
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="file"
                accept="image/*"
                fullWidth
                onChange={(e) => setLogo(e.target.files[0])}
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

export default ValuableclientAdd;
