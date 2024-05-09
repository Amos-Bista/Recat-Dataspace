import React from "react";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";
import { Button } from "@mui/material";
import AboutCardTable from "../../component/adminAbout/aboutCardtable";


const AdminAbout = () => {
 
  return (
    <main className="flex align-middle bg-[#0D5077] py-28">
      <div className="ml-1">
        <AdminNav />
      </div>
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
        <div className="flex justify-between align-middle">
          <h1>About</h1>
          <Button
            variant="contained"
            className="flex items-end align-end"
          >
          </Button>
        </div>
        <Herosec />
        <AboutCardTable />
       
      </div>
    </main>
  );
};

export default AdminAbout;
