import React, { useEffect, useState } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";

const LandingEdit = ({ contactDetails, handleEditContact }) => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // Use useEffect to update the state when contactDetails changes
  useEffect(() => {
    if (contactDetails) {
      setPhoneNumbers(contactDetails.phoneNumbers || "");
      setEmail(contactDetails.email || "");
      setAddress(contactDetails.address || "");
      setBackgroundImage(contactDetails.backgroundImage || "");
      setDescription(contactDetails.description || "");
      setTitle(contactDetails.title || "");
    }
  }, [contactDetails]);

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
            phoneNumbers,
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

  //   if (!contactDetails) {
  //     return <div>Loading...</div>; // Or any other loading indicator
  //   }

  return (
    <div>
      <Grid container spacing={4} padding={5}>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <Box>
            {backgroundImage && (
              <img
                src={backgroundImage}
                alt="Background"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            )}
            <TextField
              label="Enter background image URL"
              variant="outlined"
              fullWidth
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
              style={{ marginTop: "1rem" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
            Description
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Enter description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Phone Numbers:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Enter numbers (comma separated)"
            variant="outlined"
            fullWidth
            value={phoneNumbers}
            onChange={(e) => setPhoneNumbers(e.target.value)}
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

      <Box
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
      </Box>
    </div>
  );
};

export default LandingEdit;
