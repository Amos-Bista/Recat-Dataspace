import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import Delete from "../../component/adminHome/Delete";
import Edit from "../../component/adminHome/Edit";
import AboutHeroAdd from "./aboutHeroAdd";

const   AboutHero = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch("http://172.16.100.109:8282/aboutUs/getAboutUs");
        
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
        setRows(data);
        console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };

  const addData = (data) => {
    setRows([...rows, data]);
  };

  const handleDelete = (index) => {
    // Call API to delete the data if needed
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <main>
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077] text-[34px] mb-[40px]">
          About Hero Section
        </h3>
        <Box>
          <AboutHeroAdd addData={addData} />
        </Box>
      </div>
      <div className="">
        {error && <p className="text-red-500">{error}</p>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Background Image</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.backgroundImage}</TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }}>
                      <Edit />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ margin: 2, backgroundColor: 'red', color: 'white', "&:hover": { backgroundColor: 'darkred' } }}
                    //   onClick={() => handleDelete(row.id)}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default AboutHero;
