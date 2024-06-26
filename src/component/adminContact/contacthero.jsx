import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ContactHeroAdd from "../../component/adminContact/contactheroadd";
import ContactHeroEdit from "../../component/adminContact/contactheroedit";
import ContactHeroDelete from "../../component/adminContact/contactherodelete";
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';

import { Box } from "@mui/material";

const ContactHero = () => {
  const [rows, setRows] = useState([]);

  const addData = (data) => {
    setRows([...rows, data]);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/allContacts`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setRows(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };
  const imgStyles = {
    width: "20vw",
    height: "12vw",
    position: "center",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };
  return (
    <main>
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]    mb-[40px]  ">
          Hero Section
        </h3>

        <Box>
          <ContactHeroAdd addData={addData} />
        </Box>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Backgroundimage</TableCell>
                {/* <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">
                    <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/contacts/${row.backgroundImage}`}
                          alt={rows[0].title}
                        style={imgStyles}
                        className="mx-auto"
                      />
                      {row.backgroundImage}
                    </TableCell>
                    {/* <TableCell align="center">
                      <Button sx={{ margin: 2 }}>
                        <ContactHeroEdit />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className="!bg-red-500 hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
                      >
                        <ContactHeroDelete
                          onDelete={() => handleDelete(index)}
                        />
                      </Button>
                    </TableCell> */}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={5}>
                  <SdCardAlertIcon color="error"/>
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

export default ContactHero;
