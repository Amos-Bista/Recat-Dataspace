import React from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminNav from "../../component/adminHome/adminNav";
import Herosec from "../../component/adminHome/herosec";
import ContactInfo from "../../component/adminHome/contactInfo";
import HomeHero from "../../component/adminHome/homehero";

const AdminHome = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#d1d5db]  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
        {/* <div className="flex justify-between align-middle">
          <h1>Home</h1>
          <Button variant="contained" className="flex items-end align-end">
            Add New +
          </Button>
        </div> */}
        <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
          <HomeHero />
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
