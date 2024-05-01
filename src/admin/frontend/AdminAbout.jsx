import React from "react";
import ContactInfo from "../../component/adminHome/contactinfo";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";

const AdminAbout = () => {
  return (
    <main className="flex align-middle  bg-[#0D5077]  py-28">
      <div className="ml-1">
        <AdminNav />
      </div>
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
        <Herosec />
        <ContactInfo />
      </div>
    </main>
  );
};

export default AdminAbout;
