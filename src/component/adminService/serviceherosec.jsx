import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Serviceherosec = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("SucessFully Deleted");
      }
      const data = await response.json();
      setRowData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const imgStyles = {
    width: "10vw",
    height: "6vw",
    position: "center",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };
  //service page table
  return (
    <main className="">
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
              {Array.isArray(rows) &&
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {row.serviceName}
                    </TableCell>
                    <TableCell align="center">
                      {row.serviceDescription}
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/services/${row.serviceBgImage}`}
                        alt=""
                        style={imgStyles}
                      />
                    </TableCell>

                    <TableCell align="center">
                      {/* <Button variant="contained">
                        <ServiceEdit />
                      </Button> */}
                    </TableCell>
                    {/* <TableCell align="center">
                      <Button sx={{ margin: 2 }}>
                        <ServiceDelete  />
                      </Button>
                    </TableCell> */}
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
