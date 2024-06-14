import React, { useEffect, useState, useRef } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";

const LandingEdit = ({ contactDetails, handleEditContact }) => {
  const [open, setOpen] = useState("false");
  const [phoneNumbers, setPhoneNumbers] = useState( "");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null); // Initialize with null for file input
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // Ref for file input
  const inputRef = useRef(null);

  
  
  // Fetch data from API on component mount
  useEffect(() => {
    if (contactDetails) {
      setPhoneNumbers(contactDetails.phoneNum[0] || "");
      setEmail(contactDetails.email[0] || "");
      setAddress(contactDetails.address[0] || "");
      setBackgroundImage(contactDetails.backgroundImage[0] || null);
      setDescription(contactDetails.description[0] || "");
      setTitle(contactDetails.title[0] || "");
    } else {
      fetchData(); // Fetch data if contactDetails are not available
    }
  }, [contactDetails]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log({ data });
      setTitle(data[0]?.title);
      setBackgroundImage(data[0]?.backgroundImage);
      setPhoneNumbers(data[0]?.phoneNum);
      setEmail(data[0]?.email);
      setDescription(data[0]?.description);
      setAddress(data[0]?.address);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };
  

  // Handle image change
  const handleImageChange = (event) => {
    setBackgroundImage(event.target.files[0]);
  };

  // Handle click on hidden file input
  const handleImageClick = () => {
    inputRef.current.click();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("phoneNum", phoneNumbers);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("backgroundImage", backgroundImage);
    
    try {
      const success = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/updateContact`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (success) {
        alert("Contact updated successfully!");
        handleEditContact();
      } else {
        alert("Error updating contact. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating contact. Please try again.");
    }
    setOpen(false);
   
  };

  return (
    <div className="mr-16 bg-white rounded-md">
      <h3 className="flex justify-center text-center pt-12 text-2xl font-[400] text-[#0D5077] mb-[40px]">
        Contact Hero Section
      </h3>

      <Grid container spacing={4} padding={5} className="pr-12">
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
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Hero Section Image
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box>
            {backgroundImage && (
              <img
                src={
                  typeof backgroundImage === "string"
                    ? backgroundImage
                    : URL.createObjectURL(backgroundImage)
                }
                alt="Background"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            )}

            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Button onClick={handleImageClick} variant="outlined">
              Choose File
            </Button>
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
        <h3 className="flex w-[100%] border-indigo-600 justify-center text-center pt-12 text-2xl font-[400] text-[#0D5077] mb-[40px]">
          Contact
        </h3>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Phone Numbers:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phoneNumbers"
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
          onClick={() => setOpen(false)}
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
          Publish
        </Button>
      </Box>
    </div>
  );
};

export default LandingEdit;
