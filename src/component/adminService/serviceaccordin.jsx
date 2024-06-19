import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
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

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getService/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="pt-6 ">
      <div className="flex items-center justify-between align-middle ">
        <h3 className=" my-3 text-2xl font-[400] text-[white] ">
          Service Name Accordion
        </h3>
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
              {Array.isArray(rowData.accordions) &&
                rowData.accordions.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
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

export default Serviceaccordin;
