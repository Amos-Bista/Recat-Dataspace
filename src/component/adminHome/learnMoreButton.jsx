import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HeroLearnMore from "./HeroSectionLearnMoreButton";
import { Grid, Typography } from "@mui/material";
const LearnMoreButton = ({ heroSectionId }) => {
  const [open, setOpen] = useState(false);
  const functionOnPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={functionOnPopUp} variant="contained">
        Learn more
      </Button>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            width: "300px", // Set your desired width
            height: "400px", // Set your desired height
          },
        }}
      >
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
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                <HeroLearnMore heroSectionId={heroSectionId}   />
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default LearnMoreButton;
