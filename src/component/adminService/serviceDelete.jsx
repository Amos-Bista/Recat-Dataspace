import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ServiceDelete = ({ onDelete }) => {
  const [open, setOpen] = useState(false);
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  // const onDelete = () => {};

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };
  return (
    <>
      <Button onClick={functionOnPopUp} color="error" variant="contained">
        DELETE
      </Button>
      <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="xs">
        <DialogTitle>
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
        <DialogContent
          style={{
            color: "black",
            fontWeight: "900",
            fontSize: "20px",
            marginLeft: "60px",
            display: "flex",
            textAlign: "center",
          }}
        >
          This Action will delete the page. <br /> Are you sure?
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
          }}
        >
          <Button
            color="error"
            variant="contained"
            style={{ borderRadius: "12px" }}
            onClick={handleDelete}
          >
            DELETE
          </Button>
          <Button
            onClick={closePopUp}
            color="inherit"
            variant="contained"
            style={{ borderRadius: "12px", border: "1px solid black" }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ServiceDelete;
