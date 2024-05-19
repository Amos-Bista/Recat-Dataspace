import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Delete from "../../component/adminHome/Delete";
import Edit from "../../component/adminHome/Edit";
import Add from "../../component/adminHome/Add";
import { Box } from "@mui/material";

const HomeHero = () => {
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
      <div className="flex justify-between   items-center">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]  mb-[40px]  ">
          Hero Section
        </h3>

        <Box>
          <Add addData={addData} />
        </Box>
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
                    <Button sx={{ margin: 2 }}
                    className="!bg-red-500 hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
                    >
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

export default HomeHero;
