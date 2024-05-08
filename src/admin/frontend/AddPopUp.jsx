import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const Addpopup = ({ open, handleClose, handleAdd }) => {
  // State to hold input values
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [backgroundImage, setBackgroundImage] = React.useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Validate input fields if needed
    // Add new data to HomeHero table
    handleAdd({ title, description, backgroundImage });
    // Close the pop-up
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>

      <DialogTitle>Add New HomeHero Item</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <TextField
          label="Background Image"
          value={backgroundImage}
          onChange={(e) => setBackgroundImage(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Addpopup;
