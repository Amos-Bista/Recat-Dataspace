"use client";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import ContactInfoAdd from "./contactinfoadd";
import ContactInfoEdit from "./contactinfoedit";
import ContactInfoDelete from "./contactinfodelete";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";

const ContactInfo = () => {
  const [rows, setRows] = useState([]);

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
  const handleDelete = async (id, index) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/contacts/deleteContact/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <main>
      <div className="flex justify-between items-center">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]   ">
          Contact Information
        </h3>
        <Box>
          <ContactInfoAdd handleAddContact={fetchData} />
        </Box>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Number</TableCell>
                <TableCell align="center">Mail</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.phoneNum}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ margin: 2 }}>
                        <ContactInfoEdit
                          contactDetails={row}
                          handleEditContact={fetchData}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ margin: 2 }}>
                        <ContactInfoDelete
                          onDelete={() => handleDelete(row.id, index)}
                        />
                      </Box>
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

export default ContactInfo;
