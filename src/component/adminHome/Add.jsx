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

// const Add = ({ addData }) => {
//   const [open, setOpen] = useState(false);
//   // const [title, setTitle] = useState("");
//   // const [description, setDescription] = useState("");
//   // const [image, setImage] = useState("");

//   const [serviceName, setServiceName] = useState("");
//   const [serviceDescription, setServiceDescription] = useState("");
//   const [serviceBgImage, setServiceBgImage] = useState("");

//   const [response, setResponse] = useState("");
//   const functionOnPopUp = () => {
//     setOpen(true);
//   };
//   const closePopUp = () => {
//     setOpen(false);
//   };

//   const handleTitleChange = (e) => setServiceName(e.target.value);
//   const handleDescriptionChange = (e) => setServiceDescription(e.target.value);
//   const handleImageChange = (event) => {
//     setServiceBgImage(event.target.files[0]);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://172.16.100.109:8282/services/addServices",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             serviceName,
//             serviceDescription,
//             serviceBgImage,
//           }),
//         }
//       );

//       if (response.ok) {
//         setResponse("Contact registeresd");
//         alert("Form submitted successfully!");
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
//           Hero Section
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
//                 Title
//               </Typography>
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Enter title"
//                 variant="outlined"
//                 fullWidth
//                 onChange={handleTitleChange}
//               />
//             </Grid>
//             <Grid></Grid>

//             <Grid item xs={6}>
//               <Typography
//                 variant="h6"
//                 gutterBottom
//                 style={{ marginTop: "1rem" }}
//               >
//                 Description
//               </Typography>
//             </Grid>
//             <Grid
//               item
//               xs={6}
//               // style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
//             >
//               <TextField
//                 label="Enter description"
//                 variant="outlined"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 onChange={handleDescriptionChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6" gutterBottom>
//                 Upload Image
//               </Typography>
//             </Grid>
//             <Grid
//               // onClick={handleImageClick}
//               item
//               xs={6}
//               // style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
//             >
//               {/* {serviceBgImage ? (
//                 <img
//                   src={`url(http://172.16.100.109:8282/se/${serviceBgImage})`}
//                   style={{
//                     width: "500px",
//                     height: "250px",
//                     objectFit: "cover",
//                     overflow: "hidden",
//                   }}
//                 />
//               ) : (
//                 <img
//                   src="/editBackground.png"
//                   style={{
//                     width: "500px",
//                     height: "250px",
//                     objectFit: "cover",
//                     overflow: "hidden",
//                   }}
//                 />
//               )} */}
//               <input
//                 type="file"
//                 ref={inputRef}
//                 className=""
//                 onChange={handleImageChange}
//               />{" "}
//               {/* Correct usage of useRef */}
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

// export default Add;
import React, { useState, useRef } from "react";
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

const Add = ({ addData }) => {
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceBgImage, setServiceBgImage] = useState(null); // Updated to null initially

  const [response, setResponse] = useState("");

  const functionOnPopUp = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setServiceName(e.target.value);
  const handleDescriptionChange = (e) => setServiceDescription(e.target.value);
  const handleImageChange = (event) => {
    setServiceBgImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("serviceName", serviceName);
      formData.append("serviceDescription", serviceDescription);
      formData.append("serviceBgImage", serviceBgImage);

      const response = await fetch(
        "http://172.16.100.109:8282/services/addServices",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResponse("Contact registered");
        alert("Form submitted successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error posting data.");
      alert("Error submitting form. Please try again.");
    }
    setOpen(false);
  };

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        Add New +
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="md">
        <DialogTitle style={{ color: "#0c5177", textAlign: "center",fontSize: "30px" }}>
          Hero Section
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
                onChange={handleTitleChange}
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
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Upload Image
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Button onClick={handleImageClick} variant="outlined">
                Choose File
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            gap: "400px",
            // marginRight: "13px",
          }}
        >
          <Button variant="contained" onClick={closePopUp}
          style={{ backgroundColor: "#FF0000", marginLeft:'53px', marginRight:'auto'}}
          >
            UNPUBLISH
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ backgroundColor: "#0c5177", color: "#fff", marginLeft:'auto', marginRight:'auto'  }}
            variant="contained"
          >
            PUBLISH
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Add;
