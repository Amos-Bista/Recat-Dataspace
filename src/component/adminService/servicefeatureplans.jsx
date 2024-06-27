import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import FeaturePlansAdd from "./featurePlansAdd";
import FeaturePlansEdit from "./featurePlansEdit";
import PlanSpecAdd from "./planSpecAdd";
import FeaturePlansDelete from "./featurePlansDelete";
import FeaturePlanSpecButton from "./featurePlansViewSpecButton";

const ServiceFeaturePlans = () => {
  const { id } = useParams();
  const [rowData, setRowData] = useState({
    servicePlans: [],
  });
  const [subscriptionPlan, setSubscriptionPlan] = useState(""); // State to store the billing period

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
      setSubscriptionPlan(data.subscriptionPlan); // Set the subscriptionPlan fetched from API
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
    }
  };

  const updateRowData = async () => {
    await fetchData();
  }; //when edited data

  const handleDelete = async (rowId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/servicePlans/deleteServicePlan?id=${rowId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete accordion");
      }
      toast.success("Feature Plan deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting accordion:", error);
      toast.error("Failed to delete accordion. Please try again.");
    }
  };

  

  return (
    <main className="pt-6 border-b-2">
      <div className="flex items-center justify-between">
        <h3 className="my-3 text-2xl font-[400] text-[#383698] ">
          Features Plans
        </h3>
        <div className="mb-[12px]">
          <FeaturePlansAdd addfeaturePlan={updateRowData} />
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Plan Title</TableCell>
                <TableCell align="center">Plan Tiers</TableCell>
                <TableCell align="center">Billing Period</TableCell>{" "}
                {/* New column */}
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Specification</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rowData.servicePlans) &&
                rowData.servicePlans.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.servicePlanTitle}</TableCell>
                    <TableCell align="center">{row.servicePlanTiers}</TableCell>
                    <TableCell align="center">
                      {row.subscriptionPlan}
                    </TableCell>{" "}
                    {/* Display subscriptionPlan */}
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">
                      <FeaturePlanSpecButton id={row.id}  data={rowData} />
                    </TableCell>
                    <TableCell align="center">
                      <Box variant="contained">
                        <FeaturePlansEdit
                          title={row.servicePlanTitle}
                          tiers={row.servicePlanTiers}
                          price={row.price}
                          id={row.id}
                          updateRowData={updateRowData}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <FeaturePlansDelete
                        onDelete={() => handleDelete(row.id)}
                      />
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

export default ServiceFeaturePlans;
