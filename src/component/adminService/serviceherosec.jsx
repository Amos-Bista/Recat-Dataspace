import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ServiceDelete from "./serviceDelete";
import ServiceEdit from "./serviceEdit";
import { toast } from "react-toastify";
import parse from 'html-react-parser';

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
        toast.success("Successfully fetched");
        fetchData();
      }
      const data = await response.json();
      setRowData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id, index) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/deleteService?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRowData(updatedRows);
      } else {
        toast.error("Delete successful");
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const imgStyles = {
    width: "10vw",
    height: "6vw",
    position: "center",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };

  return (
    <main className="">
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">SNO</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Background Image</TableCell>
                <TableCell align="center">Sub Title</TableCell>
                <TableCell align="center">Sub Image</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rows) &&
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {row.serviceName}
                    </TableCell>
                    <TableCell align="center">
                      {parse(row.serviceDescription)}
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/services/${row.serviceBgImage}`}
                        alt=""
                        style={imgStyles}
                        className="flex mx-auto"
                      />
                    </TableCell>
                    <TableCell align="center">{row.serviceSubName}</TableCell>
                    <TableCell align="center">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/services/${row.serviceSubImage}`}
                        alt=""
                        style={imgStyles}
                        className="flex mx-auto"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ServiceEdit id={row.id} data={row} />
                    </TableCell>
                    <TableCell align="center">
                      <Button sx={{ margin: 2 }}>
                        <ServiceDelete
                          onDelete={() => handleDelete(row.id, index)}
                        />
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
