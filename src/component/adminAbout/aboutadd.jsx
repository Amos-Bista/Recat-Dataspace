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
// import React, { useState, useRef } from "react";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// const ContactAdd = ({ addData }) => {
//   const [open, setOpen] = useState(false);

//   const [number, setNumber] = useState("");
//   const [mail, setMail] = useState("");
//   const [address, setAddress] = useState("");
//   const functionOnPopUp = () => {
//     setOpen(true);
//   };
//   const closePopUp = () => {
//     setOpen(false);
//   };

//   const handleNumberChange = (e) => setNumber(e.target.value);
//   const handleMailChange = (e) => setMail(e.target.value);
//   const handleAddressChange = (e) => setAddress(e.target.value);

//   const handleSubmit = () => {
//     const data = {
//       Number: number,
//       Mail: mail,
//       Address: address,
//     };
//     addData(data);
//     setNumber("");
//     setMail("");
//     setAddress("");
//     closePopUp();
//   };

//   const inputRef = useRef(null);
//   const handleImageClick = () => {
//     inputRef.current.click();
//   };

//   return (
//     <>
//       <Button onClick={functionOnPopUp} color="primary" variant="contained">
//         Add New +
//       </Button>
//       <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
//         <DialogTitle style={{ color: "#0c5177" }}>
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
//                 Number
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Enter number"
//                 variant="outlined"
//                 fullWidth
//                 value={number}
//                 onChange={handleNumberChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6" gutterBottom>
//                 Mail
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Enter mail"
//                 variant="outlined"
//                 fullWidth
//                 value={mail}
//                 onChange={handleMailChange}
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
//                 onChange={handleAddressChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions
//           style={{
//             display: "flex",
//             gap: "200px",
//             marginRight: "13px",
//           }}
//         >
//           <Button color="inherit" variant="contained" onClick={closePopUp}>
//             UNPUBLISH
//           </Button>
//           <Button
//             onClick={handleSubmit}
//             style={{ backgroundColor: "#0c5177", color: "#fff" }}
//             variant="contained"
//           >
//             PUBLISH
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ContactAdd;
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

const AboutAdd = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState("");
  const [tittle, setTittle] = useState("");
  const [paragraph, setParagraph] = useState("");
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
        "http://172.16.100.109:8282/contacts/addContacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ logo, tittle, paragraph }),
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
          Card Informantion
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
                Logo:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="file"
                accept=".png"
               
                variant="outlined"
                fullWidth
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Tittle:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter tittle"
                variant="outlined"
                fullWidth
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Paragraph
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Paragraph"
                variant="outlined"
                fullWidth
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
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

export default AboutAdd;
