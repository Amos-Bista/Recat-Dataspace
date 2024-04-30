import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminNav from '../../component/adminHome/adminNav'

function createData(tittle, desc, bgimg, edit, remove ) {
  return { tittle, desc, bgimg, edit, remove};
}

const rows = [
  createData("Colocation", 159, 6.0, 24, "remove1"),
  createData("Web Hosting", 237, 9.0, 37, "remove1"),
  createData("Backup", 262, 16.0, 24, "remove1"),
];
const AdminHome = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
       <AdminNav />
      <div className="flex ">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tittle</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Background img</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.tittle}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.tittle}
                  </TableCell>
                  <TableCell align="right">{row.desc}</TableCell>
                  <TableCell align="right">{row.bgimg}</TableCell>
                  <TableCell align="right">{row.edit}</TableCell>
                  <TableCell align="right">{row.remove}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default AdminHome;
