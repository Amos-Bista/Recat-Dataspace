// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// const ContactInfoAdd = ({ handleAddContact }) => {
//   const [open, setOpen] = useState(false);
//   const [phoneNum, setPhoneNum] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [response, setResponse] = useState("");
//   const functionOnPopUp = () => {
//     setOpen(true);
//   };
//   const closePopUp = () => {
//     setOpen(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/contacts/addContacts`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phoneNum, email, address }),
//         }
//       );
//       if (response.ok) {
//         setResponse("Contact registeresd");
//         alert("Form submitted successfully!");
//         handleAddContact();
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

//   return (
//     <>
//       <Button onClick={functionOnPopUp} color="primary" variant="contained">
//         Add New +
//       </Button>
//       <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
//         <DialogTitle
//           style={{ color: "#0c5177", textAlign: "center", fontSize: "30px" }}
//         >
//           Contact Information
//           <IconButton
//             aria-label="close"
//             onClick={closePopUp}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <Grid container spacing={4} padding={5}>
//             <Grid item xs={6}>
//               <Typography variant="h6" gutterBottom>
//                 Phone Number:
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Enter number"
//                 variant="outlined"
//                 fullWidth
//                 value={phoneNum}
//                 onChange={(e) => setPhoneNum(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6" gutterBottom>
//                 Email:
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Enter mail"
//                 variant="outlined"
//                 fullWidth
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6" gutterBottom>
//                 Address
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Enter address"
//                 variant="outlined"
//                 fullWidth
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions
//           style={{
//             display: "flex",
//             gap: "460px",
//             MaxwWidth: "895px",
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={closePopUp}
//             style={{
//               backgroundColor: "#FF0000",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             UNPUBLISH
//           </Button>
//           <Button
//             onClick={handleSubmit}
//             style={{
//               backgroundColor: "#0c5177",
//               color: "#fff",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//             variant="contained"
//           >
//             PUBLISH
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ContactInfoAdd;

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
import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { json } from "react-router-dom";

const ContactInfoAdd = ({ handleAddContact }) => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null); // Updated to null initially
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setBackgroundImage(imageFile);
    }
  };
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
    console.log("input ref", inputRef.current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("backgroundImage", backgroundImage);
      formData.append("phoneNum", phoneNum);
      formData.append("email", email);
      formData.append("address", address);
      console.log(FormData)
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/addContacts`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Check for successful status code
        setResponse("Contact registered");
        // alert("Form submitted successfully!");
        // handleAddContact(); // Call the function to handle contact addition
        console.log(response.data); // Access response data if needed
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error posting data.");
      // alert("Error submitting form. Please try again.");
    }
    // setOpen(false);
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
                label="Enter title"
                variant="outlined"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
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
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input type="file" id="imageInput" ref={inputRef} accept="image/*" onChange={handleImageChange} />
              <Button onClick={handleImageClick} variant="outlined">
                Choose File
              </Button>
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
                type="number"
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
                type="email"
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
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "460px",
            MaxwWidth: "895px",
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

export default ContactInfoAdd;
