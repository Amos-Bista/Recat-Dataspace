"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Container, Typography } from "@mui/material";

const Contactform = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

  const fetchData = async () => {
    try {
      const response = await fetch(
        `  ${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
        height: " 500px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
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
        <Typography variant="h4" className="mt-8">
          Contact Information
        </Typography>

        <h2 className="py-6 font-light text-l">
          Feel free to contact us in case of problem
        </h2>
        {rows.map((row, index) => (
          <div key={index} className="flex flex-col mt-2 ">
            <div className="flex items-center gap-2">
              <img src="Vector.png" alt="" className="w-8 h-9" />
              <p>{row.phoneNum}</p>
            </div>
            <div className="flex items-center gap-4 pl-1 mt-4">
              <img src="/inbox-icon.png" alt="" className="w-6 h-5" />
              <p>{row.email}</p>
            </div>
            <div className="flex gap-2 mt-4 align-middle">
              <img src="/location-icon.png" alt="" className="w-8 h-8" />
              <p className="text-left">{row.address}</p>
            </div>
          </div>
        ))}
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
        <div className="absolute bottom-12 right-12">
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
