import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Delete from "../../component/adminHome/Delete";
import Edit from "../../component/adminHome/Edit";
import Add from "../../component/adminHome/Add";
import { Box } from "@mui/material";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";

const HomeHero = () => {
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const addData = (data) => {
    setRows([...rows, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/allSections`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRows(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async (id, index) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/heroSection/deleteSection?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
      } else {
        toast.error("Delete Sucessful");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const imgStyles = {
    width: "10vw",
    height: "6vw",
    position: "center",
    transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
  };
  return (
    <main>
      <div className="flex items-center justify-between">
        <h3 className="my-8 text-2xl font-[400] text-[#0D5077]  text-[34px]  mb-[40px]  ">
          Hero Section
        </h3>

        <Box>
          <Add addData={addData} fetchData={fetchData} />
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
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{rows[index].title}</TableCell>
                    <TableCell align="center">
                      {rows[index].description}
                    </TableCell>
                    <TableCell className="flex justify-center">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/services/${rows[index].backgroundImage}`}
                        alt={rows[0].title}
                        style={imgStyles}
                        className="mx-auto"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Edit />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className=" hover:!bg-red-700 !text-white !py-1 !px-2 !rounded"
                      >
                        <Delete   onDelete={() => handleDelete(row.id, index)} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow style={imgStyles}>
                  <TableCell align="center" colSpan={5}>
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

export default HomeHero;
