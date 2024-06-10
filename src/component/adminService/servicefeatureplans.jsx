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
import ServiceAdd from "./serviceAdd";
const Servicefeatureplans = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(Servicefeatureplan);
    setRowData(data);
  }, []);

  return (
    <main className="pt-6 border-b-2">
      <div className="flex items-center justify-between">
        <h3 className="my-3 text-2xl font-[400] text-[#383698] ">
          Features Plans
        </h3>
        <div className="mb-[12px]">
          <ServiceAdd />
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Package Title</TableCell>
                <TableCell align="center">Service Image</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rowData) &&
                rowData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.Title}</TableCell>
                    <TableCell align="center">{row.Packagetitle}</TableCell>
                    <TableCell align="center">{row.Serviceimage}</TableCell>
                    <TableCell align="center">{row.Price}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained">Edit</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className="!bg-red-500 hover:!bg-red-700 !text-white !rounded"
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

export default Servicefeatureplans;
