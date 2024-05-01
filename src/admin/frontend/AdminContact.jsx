import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import { Button } from "@mui/material";

const AdminContact = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg"><div className="flex justify-between align-middle">
          <h1>Contact</h1>
          <Button variant="contained" className="flex items-end align-end">
            Add New +
          </Button>
        </div></div>
    </main>
  );
};

export default AdminContact;
