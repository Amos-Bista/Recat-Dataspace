import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import AboutHeroAdd from "./aboutHeroAdd";
import AboutHeroEdit from "./aboutheroedit";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import parse from "html-react-parser";

const AboutHero = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  console.log(error);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };

  const addData = (data) => {
    setRows([...rows, data]);
  };

  return (
    <main>
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  mb-[40px]">
          AboutUs Hero Section
        </h3>
        <Box>
          <AboutHeroAdd addData={addData} />
        </Box>
      </div>
      <div className="relative">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Background Image</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">
                      {parse(row.description)}
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${row.backgroundImage}`}
                        className="w-[20rem] h-[12rem] flex mx-auto"
                        alt="Background"
                        onError={(e) =>
                          console.error("Image failed to load", e)
                        }
                      />
                    </TableCell>
                    <TableCell align="center">
                      <AboutHeroEdit
                        aboutDetails={row}
                        handleEditAbout={fetchData}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <SdCardAlertIcon color="error" />
                    No contacts available. Please add new contacts.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default AboutHero;
