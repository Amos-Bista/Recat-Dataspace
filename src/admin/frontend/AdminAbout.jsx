import React from "react";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";
import { Button } from "@mui/material";
import AboutfeaturesPlan from "../../component/adminHome/aboutfeaturesPlan";

const AdminAbout = () => {
  return (
    <main className="flex align-middle  bg-[#0D5077]  py-28">
      <div className="ml-1">
        <AdminNav />
      </div>
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
      <div className="flex justify-between align-middle">
          <h1>About</h1>
          <Button variant="contained" className="flex items-end align-end">
            Add New +
          </Button>
        </div>
        <Herosec />
        <AboutfeaturesPlan />
      </div>
    </main>
  );
};

export default AdminAbout;
