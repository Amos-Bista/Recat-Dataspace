import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Delete = ({ id, onDelete }) => {
  const [open, setOpen] = useState(false);
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <Button onClick={functionOnPopUp} color="primary" variant="contained">
        DELETE
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="sm">
        <DialogTitle>
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
        <DialogContent>Are you sure u want to delete?</DialogContent>
        <DialogActions className="flex ">
          <Button onClick={handleDelete} color="success" variant="contained">
            DELETE
          </Button>
          <Button onClick={closePopUp} color="error" variant="contained">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;
