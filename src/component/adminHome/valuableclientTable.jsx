import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ValuableclientAdd from "./valuableclientAdd";
import { Box } from "@mui/material";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import VCD from "./valueclientDelete";
import { toast } from "react-toastify";

const ValuableclientTable = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/client/getClient`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id, index) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/client/deleteClient?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRowData(updatedRows);
      } else {
        toast.error("Delete Sucessful");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      toast("Error deleting contact:", error);
    }
    // handleDelete();
  };

  return (
    <main className="">
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077] ">
          Valuable Client's List
        </h3>
        <Box>
          <ValuableclientAdd />
        </Box>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "30%" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ width: "30%" }}>
                  Customer Logo
                </TableCell>
                {/* <TableCell align="center" sx={{ width: "20%" }}>
                  Edit
                </TableCell> */}
                <TableCell align="center" sx={{ width: "20%" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{
                        width: "30%",
                        maxWidth: "200px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      title={row.title}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell align="center" sx={{ width: "30%" }}>
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/client/${row.logo}`}
                        alt=""
                        style={{
                          width: "80px",
                          height: "80px",
                          position: "relative",
                          left: "162px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" sx={{ width: "20%" }}>
                      {/* <Button sx={{ margin: 2 }} variant="contained">
                        Edit
                      </Button> */}
                    </TableCell>
                    <TableCell align="center" sx={{ width: "20%" }}>
                      <VCD onDelete={() => handleDelete(row.id, index)} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <SdCardAlertIcon color="error" />
                    No items available. Please add new items.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default ValuableclientTable;
