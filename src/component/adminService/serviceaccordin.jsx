import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import adminacordin from "../../assests/adminacordin.json";
import AccordionAdd from "./accordionAdd";

const Serviceaccordin = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(adminacordin);
    console.log(data);

    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <main className="pt-6 border-b-2 border-[#0D5077]">
      <div className="flex items-center justify-between align-middle ">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]">
          Accordion
        </h3>
        <div className="flex justify-between mb-4 align-middle">
          <h1> </h1>
          <Button >
         < AccordionAdd/>
          </Button>
        </div>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
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

export default Serviceaccordin;
