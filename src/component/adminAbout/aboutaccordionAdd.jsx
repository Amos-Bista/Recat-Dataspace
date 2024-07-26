import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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

// Simple integer ID generator

const AboutAccordionAdd = ({ onAboutAccordionAdded }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null); // State to hold selected file
  // const [serviceId, setServiceId] = useState(null); // State to hold the fetched serviceId
  const { id } = useParams();

  const inputRef = useRef(null);

  const handleImageChange = (event) => {
    setLogo(event.target.files[0]); // Update logo state with selected file
  };

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
    // Reset form fields when closing the dialog
    setTitle("");
    setDescription("");
    setLogo(null);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);

  // console.log({serviceId})

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields before submission
    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("aboutUsId", 1); // Include the unique integer ID
    formData.append("title", title);
    formData.append("description", description);
    formData.append("logo", logo);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUsDesc/addAccordion`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            // "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        console.log(response);
        closePopUp(true);
        window.location.reload();

        if (onAboutAccordionAdded) {
          onAboutAccordionAdded();
        }
        closePopUp(); // Close dialog on successful submission
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  useEffect(() => {}, [id]);

  //   Simple form validation function (you can expand as needed)
  const validateForm = () => {
    if (!title || !description || !logo) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return true;
  };

  return (
    <div>
      <Button
        onClick={functionOnPopUp}
        color="primary"
        variant="contained"
        marginLeft="200px"
      >
        Add New
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle
          style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
        >
          About Accordion Add
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
                Accordion Logo
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={6}>
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }} // Hide the input visually
                  onChange={handleImageChange}
                />
                <Button
                  onClick={() => inputRef.current.click()}
                  variant="outlined"
                >
                  Choose File
                </Button>
                {logo && (
                  <img
                    src={URL.createObjectURL(logo)}
                    alt="Selected Logo"
                    style={{
                      width: "30%",
                      height: "60px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Accordion Title
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Accordion Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={handleTitleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Accordion Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* <TextField
                label="Enter Accordion Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={handledescriptionChange}
              /> */}

              <TextFieldEditor
                label="Enter Accordion Description"
                placeholder={description}
                // value={content}
                onChange={(newContent) =>  setDescription(newContent)}
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
    </div>
  );
};

export default AboutAccordionAdd;
