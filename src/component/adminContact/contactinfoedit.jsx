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
import ContactTextFieldEditor from '../../component/adminContact/contactTextEditor'

const ContactInfoEdit = ({ contactDetails = {}, handleEditContact }) => {
  const [open, setOpen] = useState(false);
  const [phoneNum, setPhoneNum] = useState(contactDetails.phoneNum || "");
  const [email, setEmail] = useState(contactDetails.email || "");
  const [address, setAddress] = useState(contactDetails.address || "");
  const [backgroundImage, setBackgroundImage] = useState(
    contactDetails.backgroundImage || ""
  );
  const [description, setDescription] = useState(
    contactDetails.description || ""
  );
  const [title, setTitle] = useState(contactDetails.title || "");
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
        `${process.env.REACT_APP_API_BASE_URL}/contacts/updateContact/${contactDetails.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNum,
            email,
            address,
            backgroundImage,
            title,
            description,
          }),
        }
      );

      if (response.ok) {
        setResponse("Contact updated");
        alert("Contact updated successfully!");
        handleEditContact();
        
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error updating contact.");
      alert("Error updating contact. Please try again.");
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        Edit
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle style={{ color: "#0c5177", textAlign: "center" }}>
          Contact Information
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
                value={title}
                onClick={(e) => setTitle(e.target.value)}
               
                
                fullWidth
                
                rows={1}

              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                HeroSection Image
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Enter title"
                variant="outlined"
                fullWidth
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
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
                value={description}
                onclick={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
              />
               <ContactTextFieldEditor
                placeholder={description}
                value={description}
                onChange={(newContent) => setDescription(newContent)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Phone Number:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter number"
                variant="outlined"
                fullWidth
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Email:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter mail"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Address
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
          <Button
            variant="contained"
            onClick={closePopUp}
            style={{
              backgroundColor: "#FF0000",
              marginLeft: "auto",
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
              marginRight: "auto",
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

export default ContactInfoEdit;
