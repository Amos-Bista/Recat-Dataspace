import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const Navigation = () => {
  const [rows, setRows] = useState([
    { id: 1, title: "Home" },
    { id: 2, title: "Contact" },
  ]);

  const handleEdit = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle !== null) {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, title: newTitle } : row
        )
      );
    }
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleAddNew = () => {
    const newId = Math.max(...rows.map(row => row.id)) + 1;
    setRows(prevRows => [...prevRows, { id: newId, title: `New Item ${newId}` }]);
  };

  return (
    <main className="pt-6">
      <div className="flex items-center justify-between mt-[-60px]">
        <h3 className=" my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]">Navigation Bar</h3>
        <Button variant="contained" className="flex items-end h-10 align-end" onClick={handleAddNew}>
          Add New +
        </Button>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ margin: 2 }}
                      variant="contained"
                      onClick={() => handleEdit(row.id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ margin: 2 }}
                      className="!bg-red-500 !hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
                      onClick={() => handleDelete(row.id)}
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

export default Navigation;
