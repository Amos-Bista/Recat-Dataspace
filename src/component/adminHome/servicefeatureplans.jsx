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
    setRowData(data);
  }, []);

  const handleEdit = (index) => {
    // Create a copy of the rowData array
    const updatedRowData = [...rowData];

    // Prompt the user to enter new values for editing
    const newTitle = prompt("Enter new title:");
    const newPackageTitle = prompt("Enter new package title:");
    const newServiceImage = prompt("Enter new service image:");
    const newPrice = prompt("Enter new price:");

    // Update the content of the row at the specified index
    updatedRowData[index] = {
      Title: newTitle,
      PackageTitle: newPackageTitle,
      ServiceImage: newServiceImage,
      Price: newPrice
    };

    // Set the updated rowData state
    setRowData(updatedRowData);
  };

  const handleDelete = (index) => {
    // Prompt the user for confirmation before deleting the row
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");

    if (confirmDelete) {
      // Create a copy of the rowData array
      const updatedRowData = [...rowData];
      
      // Remove the row at the specified index
      updatedRowData.splice(index, 1);

      // Set the updated rowData state
      setRowData(updatedRowData);
    }
  };

  return (
    <main>
      <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px] ">Features Plans</h3>
      <div className="flex items-center justify-between mb-4">
        <h1></h1>
        <Button variant="contained" className="flex items-end" onClick={() => handleEdit(rowData.length)}>
          Add New +
        </Button>
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
              {Array.isArray(rowData) && rowData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.Title}</TableCell>
                  <TableCell align="center">{row.PackageTitle}</TableCell>
                  <TableCell align="center">{row.ServiceImage}</TableCell>
                  <TableCell align="center">{row.Price}</TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained" onClick={() => handleDelete(index)}>
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
