import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Servicefeatureplan from "../../assests/servicefeatureplan.json";

const Servicefeatureplans = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(Servicefeatureplan);
    console.log(data);
    
    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <main>
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-bold text-black">Featured Plans</h3>
        <Button variant="contained" className="flex items-end h-10 align-end" >
          Add New +
        </Button>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Packagetitle</TableCell>
                <TableCell align="center">Serviceimage</TableCell>
                <TableCell align="center">Price</TableCell>
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
                  <TableCell align="center">{row.Packagetitle}</TableCell>
                  <TableCell align="center">{row.Serviceimage}</TableCell>
                  <TableCell align="center">{row.Price}</TableCell>
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

export default Servicefeatureplans;