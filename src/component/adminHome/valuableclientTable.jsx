import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/client/deleteClient?id=${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRowData(updatedRows);
        toast.success("Delete Successful");
      } else {
        toast.error("Failed to delete client");
      }
    } catch (error) {
      toast.error("Error deleting contact:", error);
    }
  };

  return (
    <main className="w-[100%]">
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]">
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
                <TableCell align="center" sx={{ width: "10%" }}>
                  S.No
                </TableCell>
                <TableCell align="center" sx={{ width: "30%" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ width: "30%" }}>
                  Customer Logo
                </TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" sx={{ width: "10%" }}>
                      {index + 1}
                    </TableCell>
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
                        className="flex justify-center mx-auto"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
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
