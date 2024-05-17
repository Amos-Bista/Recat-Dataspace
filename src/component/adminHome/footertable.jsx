import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import contactcard from "../../assests/contactcard";
import FooterAdd from "./footerAdd";
const FooterTable= () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(contactcard);
    console.log("contact", data);

    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);
  return (
    <main className="">
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]">
Footer
        </h3>
        <Button>
          <FooterAdd />
        </Button>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Description</TableCell>
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
                  <TableCell align="center">{row.Edit}</TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} 
                    className="!bg-red-500 hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
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

export default FooterTable;
