import React, { useEffect, useState, useRef } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import { toast } from "react-toastify";
import ContactTextFieldEditor from "../../component/adminContact/contactTextEditor";

const LandingEdit = ({ contactDetails }) => {
  const [open, setOpen] = useState(false); // Use boolean false instead of string "false"
  console.log(open)
  const [id, setId] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null); // Initialize with null for file input
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isBackgroundImageChanged, setIsBackgroundImageChanged] =
    useState(false); // Track if backgroundImage is updated

  // Ref for file input
  const inputRef = useRef(null);

  // Fetch data from API on component mount
  useEffect(() => {
    fetchData(); // Fetch data if contactDetails are not available
  }, [contactDetails]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      // const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`,
        {
          method: "GET",
          // headers: {
          //   Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          //   // "Content-Type": "application/json",
          // },
        }
      );
      if (!response.ok) {
        toast.success("Success");
      }
      const data = await response.json();
      console.log({ data });
      setId(data[0]?.id);
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
    setIsBackgroundImageChanged(true); // Set flag to true when image is updated
  };

  // Handle click on hidden file input
  const handleImageClick = () => {
    inputRef.current.click();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title || "");
    formData.append("description", description || "");
    formData.append("phoneNum", phoneNumbers || "");
    formData.append("email", email || "");
    formData.append("address", address || "");

    // Append backgroundImage only if it has been changed
    if (isBackgroundImageChanged) {
      formData.append("backgroundImage", backgroundImage);
      setIsBackgroundImageChanged(false);
    }

    try {
      const success = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/updateContact/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (success.ok) {
        toast.success("Contact updated successfully");
        fetchData();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating contact. Please try again.");
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
            type="text"
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
                  maxHeight: "340px",
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
          {/* <TextField
            label="Enter description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={1}
          /> */}
          <ContactTextFieldEditor
            placeholder={description}
            value={description}
            onChange={(newContent) => setDescription(newContent)}
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
            type="number"
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
            type="email"
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
