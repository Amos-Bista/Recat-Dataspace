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
    // Fetch data from JSON file
    const data = Object.values(servicehero);
    console.log(data);

    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <main className="">
      <div className="flex justify-between align-middle mb-4">
        <h3 className="  text-2xl font-[400]  text-[white]   ">Service Name</h3>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Backgroundimage</TableCell>
                <TableCell align="center">Add Accordions</TableCell>
                <TableCell align="center">Add Plans</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rowData) &&
                rowData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {row.Title}
                    </TableCell>
                    <TableCell align="center">{row.Description}</TableCell>
                    <TableCell align="center">{row.Backgroundimage}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained">Add Accordions</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className="!bg-red-500 hover:!bg-red-700 !text-white  !rounded">
                        Add Plans
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained">Edit</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className="!bg-red-500 hover:!bg-red-700 !text-white   !rounded"
                      >
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
