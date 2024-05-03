import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import Serviceherosec from "../../component/adminHome/serviceherosec";
import Serviceaccordin from "../../component/adminHome/serviceaccordin";
import Servicefeatureplans from "../../component/adminHome/servicefeatureplans";

const AdminService = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
      <div className="ml-1">
        <AdminNav />
      </div>
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
          <Serviceherosec />
          <Serviceaccordin />
          <Servicefeatureplans />
        
      </div>
    </main>
  );
};

export default AdminService;
