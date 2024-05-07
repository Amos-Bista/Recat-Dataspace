import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import servicehero from "../../assests/servicehero.json";

const Serviceherosec = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const data = Object.values(servicehero);
    console.log(data);
      setRowData(data);
  }, []);

  return (
    <main>
      <h3 className="my-8 text-2xl font-bold text-black">Hero Section</h3>
      <div className="flex justify-between align-middle mb-4">
        <h1> </h1>
        <Button variant="contained" className="flex items-end align-end">
          Add New +
        </Button>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Backgroundimage</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rowData) && rowData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="center">
                    {row.Title}
                  </TableCell>
                  <TableCell align="center">{row.Description}</TableCell>
                  <TableCell align="center">{row.Backgroundimage}</TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained">
                      Delete
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

export default Serviceherosec;
