import React, { useState, useEffect } from "react";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AboutAccordionAdd from "./aboutaccordionAdd";
import AboutAccordionDelete from "./aboutaccordionDelete.jsx";
import { toast } from "react-toastify";
import parse from "html-react-parser";

const AdminAccordionTable = () => {
  const [aboutData, setAboutData] = useState([]);
  const [imageUrls, setImageUrls] = useState({});

  console.log(imageUrls);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUs/getAboutUs`
      );
      if (!response.ok) {
        throw new Error("Success");
      }
      const data = await response.json();
      setAboutData(data);

      // Fetch images if required
      const token = localStorage.getItem("token");
      const urls = {};
      for (const item of data[0]?.aboutUsAccordions || []) {
        if (item.logo) {
          const imageResponse = await fetch(item.logo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (imageResponse.ok) {
            const blob = await imageResponse.blob();
            urls[item.id] = URL.createObjectURL(blob);
          }
        }
      }
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching service data:", error);
      // Optionally, you can handle errors or set a state to indicate error state
    }
  };

  const handleDelete = async (panelId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/aboutUsDesc/deleteAccordion?id=${panelId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete accordion");
      }
      toast.error("Accordion deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting accordion:", error);
      // alert("Failed to delete accordion");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-2xl font-[400] text-[#0D5077] mb-[40px]">
          About Accordion
        </h1>
        <AboutAccordionAdd onAboutAccordionAdded={fetchData} />
      </div>
      <div className="w-full h-full rounded-lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Logo</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aboutData[0]?.aboutUsAccordions.map((about) => (
                <TableRow key={about.id}>
                  <TableCell align="center">{about.title}</TableCell>
                  <TableCell align="center">
                    {about.logo && (
                      <img
                        // src={imageUrls[about.id] || about.logo}
                        src={`${process.env.REACT_APP_API_BASE_URL}/aboutUs/${about.logo}`}
                        alt="Logo"
                        className="flex mx-auto"
                        style={{ width: "30px", height: "auto" }} // Adjust dimensions as needed
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {parse(about.description)}
                  </TableCell>
                  <TableCell align="center">
                    <AboutAccordionDelete
                      onDelete={() => handleDelete(about.id)}
                      className="flex justify-center mx-auto"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminAccordionTable;
