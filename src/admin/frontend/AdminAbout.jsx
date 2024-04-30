import React from "react";
import Button from "@mui/material/Button";
import Contactinfo from "../../component/adminHome/contactinfo";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";

const AdminAbout = () => {
  return (
    <main className="flex align-middle  bg-[#0D5077]  py-28">
      <div className="ml-16">
        <AdminNav />
      </div>
      <div className="ml-96 mr-16">
        <Herosec />
        <Contactinfo />
      </div>
    </main>
  );
};

export default AdminAbout;
