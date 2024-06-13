import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AdminNav from "../adminHome/adminNav";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import AccordionAdd from "../adminService/accordionAdd";
import Servicefeatureplans from "../adminService/servicefeatureplans";

const AdminAccordionTable = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getService/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch service data");
      }
      const data = await response.json();
      setServiceData(data);
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };

  

  if (!serviceData) {
    return <div>Loading...</div>;
  }
  // Construct the image URL
  // const imageUrl = `http://172.16.100.109:8282/services/${serviceData.serviceBgImage}`;
  // console.log(imageUrl);

  

  return (
    <div>
      <main className="flex align-middle bg-gray-200 py-28">
        <AdminNav />
        <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mr-14">
          
          <div className="mb-10 ">
            <AccordionAdd />
          </div>
          <div className="w-full h-full px-2 rounded-lg ">
            <TableContainer component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceData.accordions.length > 0 ? (
                  serviceData.accordions.map((panel) => (
                    <TableRow key={panel.id}>
                      <TableCell align="center">{panel.title}</TableCell>
                      <TableCell align="center">{panel.description}</TableCell>
                      <TableCell> 
                        <Button variant="contained">EDIT</Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          className="!bg-red-500 !hover:!bg-red-700 !text-white !py-2 !px-4 !rounded"
                          variant="contained"
                        >
                          DELETE
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      <SdCardAlertIcon color="error" />
                      No items available. Please add new items.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </TableContainer>
            <Servicefeatureplans />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAccordionTable;
