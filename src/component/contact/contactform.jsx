import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Container, Typography } from "@mui/material";

const Contactform = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        text: "white",
        position: "relative",
        borderRadius: 6,
        padding: "0px !important",
        boxShadow: "4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 6,
          alignItems: "start",
          overflow: "hidden",
          color: "white",
          position: "relative",
          backgroundColor: "#0D5077",
          flexDirection: "column",
          padding: 6,
          width: "100%",
        }}
      >
        <div className="h-36 w-36 absolute top-[63%] left-[63%] rounded-full bg-[#11396e71]"></div>
        <div className="h-80 w-80 absolute top-[70%] left-[70%] rounded-full bg-[#113A6E]"></div>
        <Typography variant="h4">Contact Information</Typography>

        <h2 className="text-l font-light py-6">
          Feel free to contact us in case of problem
        </h2>

        <div className="flex gap-8 mt-24 text-xl items-start align-text-bottom ">
          <img src="Vector.png" alt="" className="h-9 w-8" />{" "}
          <p>+123 456 7890</p>
        </div>
        <div className="flex gap-8 mt-16 text-xl items-start align-text-bottom   ">
          <img src="/inbox-icon.png" alt="" className="h-5 w-6 " />
          <p>demo@gmail.com</p>
        </div>
        <div className="flex gap-8 mt-16 mb-48 text-xl items-start align-text-bottom   ">
          <img src="/location-icon.png" alt="" className="h-8 w-8" />
          <p>Putalisadak, ktm NP</p>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
          padding: 6,
        }}
      >
        <div className="flex gap-12">
          <Box>
            <TextField
              sx={{ minWidth: 250, paddingTop: "16px" }}
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              sx={{ minWidth: 250, paddingTop: "16px" }}
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
          </Box>
        </div>
        <div className="flex gap-12">
          <Box>
            <TextField
              required
              sx={{ minWidth: 250, paddingTop: "16px" }}
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
            />
          </Box>
          <Box>
            <TextField
              sx={{ minWidth: 250, paddingTop: "16px" }}
              id="standard-basic"
              label="Phone Number"
              type="number"
              variant="standard"
            />
          </Box>
        </div>
        <div>
          <Box>
            <TextField
              sx={{ minWidth: 550, paddingTop: "16px" }}
              id="standard-basic"
              label="Message"
              placeholder="Write your message"
              variant="standard"
            />
          </Box>
        </div>
        <div className="absolute bottom-80 right-16">
          <Button
            variant="contained"
            sx={{ paddingX: 4, paddingY: 2, borderRadius: 4 }}
          >
            <Typography>Send</Typography>
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Contactform;
