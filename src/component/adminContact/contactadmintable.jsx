import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Delete from "../adminHome/Delete";
import Edit from "../adminHome/Edit";
import Add from "../adminHome/Add";

import contactcard from "../../assests/contactcard";
const ContactAdminTable = () => {
  const [rows, setRows] = useState([]);

  const addData = (data) => {
    setRows([...rows, data]);
  };

  const handleDelete = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };
  return (
    <main>
      <div className="flex justify-between align-middle">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]  ">
          Contact Information
        </h3>
        <Button>
          <Add addData={addData} />
        </Button>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Number</TableCell>
                <TableCell align="center">Mail</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.Title}</TableCell>
                  <TableCell align="center">{row.Description}</TableCell>
                  <TableCell align="center">{row.Backgroundimage}</TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }}>
                      <Edit />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }}>
                      <Delete onDelete={() => handleDelete(index)} />
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

export default ContactAdminTable;
