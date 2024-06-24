import React, { useState, useEffect } from "react";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AboutAccordionAdd from "./aboutaccordionAdd";
import AboutAccordionEdit from "./aboutaccordionEdit.jsx";
const AdminAccordionTable = () => {
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );
      if (!response.ok) {
        throw new Error("Sucess");
      }
      const data = await response.json();
      setAboutData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching service data:", error);
      // Optionally, you can handle errors or set a state to indicate error state
    }
  };
  const handleAboutAccordionAdded = () => {
    // fetchData(); // Refresh service data when accordion is added
  };

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-2xl font-[400] text-[#0D5077] mb-[40px]">
          About Accordion
        </h1>
        <AboutAccordionAdd onAboutAccordionAdded={handleAboutAccordionAdded} />
      </div>
      <div className="w-full h-full rounded-lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Logo</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aboutData[0].aboutUsAccordions.map((aboutData) => (
                <TableRow key={aboutData.id}>
                  <TableCell align="center">{aboutData.title}</TableCell>
                  <TableCell align="center">
                    {aboutData.logo && (
                      <img
                        src={aboutData.logo}
                        alt="Logo"
                        style={{ width: "100px", height: "auto" }} // Adjust dimensions as needed
                      />
                    )}
                  </TableCell>
                  {/* <TableCell align="center">Title</TableCell> */}
                  {/* <TableCell align="center">Desc</TableCell> */}
                  <TableCell align="center">{aboutData.description}</TableCell>
                  <TableCell>
                    <AboutAccordionEdit />
                  </TableCell>
                  <TableCell>
                    <Button
                      className="!bg-red-500 !hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
                      variant="contained"
                    >
                      DELETE
                    </Button>3
                  </TableCell>
                </TableRow>
              ))}
              {/* <TableRow>
                  <TableCell colSpan={4} align="center">
                    <SdCardAlertIcon color="error" />
                    No items available. Please add new items.
                  </TableCell>
                </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminAccordionTable;
