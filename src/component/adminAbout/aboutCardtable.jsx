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

const AboutCardTable = () => {
  const [rowDatas, setRowDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        // "http://172.16.100.109:8282/aboutUs/getAboutUs"
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
    <main className="">
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]">
          DataSpace Cards
        </h3>
        <Button>
          <AboutAdd />
        </Button>
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
              {rowDatas.map((rowData, index) => (
                <TableRow
                  key={rowData.index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      backgroundImage: `url(http://172.16.100.109:8282/aboutUs/${rowData.logo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></TableCell>
                  <TableCell align="center">{rowData.title}</TableCell>
                  <TableCell component="th" scope="row">
                    {rowData.paragraph}
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }} variant="contained">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button sx={{ margin: 2 }}
                    className="!bg-red-500 hover:!bg-red-700 !text-white !font-bold !py-2 !px-4 !rounded"
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

export default AboutCardTable;
