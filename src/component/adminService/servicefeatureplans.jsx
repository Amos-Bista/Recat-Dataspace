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
import FeaturePlansAdd from "./featurePlansAdd";

const Servicefeatureplans = () => {
  const { id } = useParams();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getService/${id}`
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
  return (
    <main className="pt-6 border-b-2">
      <div className="flex items-center justify-between">
        <h3 className="my-3 text-2xl font-[400] text-[#383698] ">
          Features Plans
        </h3>
        <div className="mb-[12px]">
          <FeaturePlansAdd />
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Plan Title</TableCell>
                <TableCell align="center">Plan Tiers</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rowData.servicePlans) &&
                rowData.servicePlans.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.servicePlanTitle}</TableCell>
                    <TableCell align="center">{row.servicePlanTiers}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained">Edit</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ margin: 2 }}
                        className="!bg-red-500 hover:!bg-red-700 !text-white !rounded"
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

export default Servicefeatureplans;
