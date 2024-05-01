import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(Title, Description, Backgroundimage, Edit, Delete) {
  return {Title, Description, Backgroundimage, Edit, Delete};
}

const rows = [
  createData(
    "Web Hosting",
    "Your gateway to R..",
    "web.png",
    24,
    4.0
  ),
];
const Herosec = () => {
  return (
    <main>
        <div className="flex justify-end">
        <Button sx={{ margin: 2 }} variant="contained">
          Add New +
        </Button>
      </div >
      <h3 className="my-8 text-2xl font-bold text-black">
        Hero Section
      </h3>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Backgroundimage</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Description}
                  </TableCell>
                  <TableCell align="center">{row.Title}</TableCell>
                  <TableCell align="center">{row.Description}</TableCell>
                  <TableCell align="center">{row.Backgroundimage}</TableCell>
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

export default Herosec;
