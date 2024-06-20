import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AdminNav from "../adminHome/adminNav";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import AccordionAdd from "./accordionAdd";
import Servicefeatureplans from "./servicefeatureplans";
import AccordionDelete from "./accordionDelete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminServiceSub = () => {
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

  const handleAccordionAdded = () => {
    fetchData(); // Refresh service data when accordion is added
  };

  const handleDelete = async (panelId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/serviceDesc/deleteDescription?id=${panelId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete accordion");
      }
      toast.error("Accordion deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting accordion:", error);
      alert("Failed to delete accordion");
    }
  };

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className="flex align-middle bg-gray-200 py-28">
        <AdminNav />
        <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mr-14 ">
          <div className="flex flex-row align-middle justify-between">
            <h1 className="text-2xl font-[400] text-[#383698]">Accordions</h1>
            <div className="mb-10">
              <AccordionAdd onAccordionAdded={handleAccordionAdded} />
            </div>
          </div>
          <div className="w-full h-full px-2 rounded-lg ">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Title</TableCell>
                    <TableCell sx={{ minWidth: 400 }} align="center">
                      Description
                    </TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceData.accordions.length > 0 ? (
                    serviceData.accordions.map((panel) => (
                      <TableRow key={panel.id}>
                        <TableCell align="center">{panel.title}</TableCell>
                        <TableCell align="center">
                          {panel.description}
                        </TableCell>
                        <TableCell align="center">
                          <Button variant="contained">EDIT</Button>
                        </TableCell>
                        <TableCell align="center">
                          <AccordionDelete
                            onDelete={() => handleDelete(panel.id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        <SdCardAlertIcon color="error" />
                        No items available. Please add new items.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Servicefeatureplans />
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default AdminServiceSub;
