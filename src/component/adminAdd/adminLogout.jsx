import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    // Remove the token from localStorage or sessionStorage
    localStorage.removeItem("token"); // replace 'your-token-key' with the actual key used to store the token
    // sessionStorage.removeItem("your-token-key"); // If the token is stored in sessionStorage

    // Redirect to login page
    toast.success("Succesfully Logedout")
    navigate("/admin");
    
  };
  return (
    <div>
      <Button onClick={functionOnPopUp} color="primary" variant="contained" sx={{height: '1rem'}}>
        <LogoutIcon />
      </Button>
      <Dialog open={open} onClose={closePopUp} maxWidth="md" className="py-12">
        <DialogTitle>
          Are you sure you awnt to log out?
          {/* <IconButton
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
          </IconButton> */}
        </DialogTitle>
        <DialogContent className="flex justofy-center">
          <Grid container>
            <Grid xs={6}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleLogout}
              >
                Yes
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button color="error" variant="contained" onClick={closePopUp}>
                No
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminLogout;
