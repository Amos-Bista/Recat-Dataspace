import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AboutAdd from "../adminAbout/aboutadd";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import { Box } from "@mui/material";

const AboutCardTable = () => {
  const [rowDatas, setRowDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowDatas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <main className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]">
          AboutUs Accordions
        </h3>
        <Box>
          <AboutAdd />
        </Box>
      </div>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Logo</TableCell>
                <TableCell align="center">Tittle</TableCell>
                <TableCell align="center">Paragraph</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowDatas.length > 0 ? (
                rowDatas.length > 0 &&
                rowDatas[0].aboutUsAccordions &&
                rowDatas[0].aboutUsAccordions.map((rowData) => (
                  <TableRow
                    key={rowData.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/aboutUs/${rowData.logo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 50,
                        height: 50,
                        display: "flex",
                        marginLeft: "20px",
                      }}
                    ></TableCell>
                    <TableCell align="center">{rowData.title}</TableCell>
                    <TableCell component="th" scope="row">
                      {rowData.description}
                    </TableCell>
                    <TableCell align="center">
                      <Button sx={{ margin: 2 }} variant="contained">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className="!bg-red-500 hover:!bg-red-700 !text-white !font-bold !py-2 !px-4 !rounded"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={5}>
                    <SdCardAlertIcon color="error" />
                    No contacts available. Please add new contacts.
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

export default AboutCardTable;
