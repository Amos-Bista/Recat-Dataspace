import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(Description, Icons, Edit, Delete, protein) {
  return { Description, Icons, Edit, Delete, protein };
}

const rows = [
  createData(
    "Expert Support and consultation",
    "Your gateway to R..",
    "web.png",
    24,
    4.0
  ),
  createData(
    "Tailored Hosting Solution",
    "Your gateway to R..",
    "vps.png",
    37,
    4.3
  ),
];
const FeaturesPlan = () => {
  return (
      <main>
        <h3 className="my-8 text-2xl font-bold text-black">
          Why DataSpace Card?
        </h3>
        <div className="">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Icon</TableCell>
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
                    <TableCell align="center">{row.Icons}</TableCell>
                    <TableCell align="center">{row.Edit}</TableCell>
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

export default FeaturesPlan;
