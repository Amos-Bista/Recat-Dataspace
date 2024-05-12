import React from "react";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";
import AboutCardTable from "../../component/adminAbout/aboutCardtable";

const AdminAbout = () => {
  return (
    <main className="  flex align-middle bg-[#0D5077] py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14">
        <Herosec />
        <AboutCardTable />
      </div>
    </main>
  );
};

export default AdminAbout;
