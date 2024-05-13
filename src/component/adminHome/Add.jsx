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

const Add = ({ addData }) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    const data = {
      Title: title,
      Description: description,
      Backgroundimage: image.name,
    };
    addData(data);
    setTitle("");
    setDescription("");
    setImage("");

    closePopUp();
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
            <Grid></Grid>

            <Grid item xs={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: "1rem" }}
              >
                Description
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              // style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
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
            <Grid
              onClick={handleImageClick}
              item
              xs={6}
              // style={{ boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)" }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  style={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              ) : (
                <img
                  src="/editBackground.png"
                  style={{
                    width: "500px",
                    height: "250px",
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              )}
              <input
                type="file"
                ref={inputRef}
                className="hidden"
                onChange={handleImageChange}
              />{" "}
              {/* Correct usage of useRef */}
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
