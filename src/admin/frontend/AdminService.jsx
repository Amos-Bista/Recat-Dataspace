import React from "react";
import AdminNav from "../../component/adminHome/adminNav";

import Serviceherosec from "../../component/adminService/serviceherosec";
import Serviceaccordin from "../../component/adminService/serviceaccordin";
import Servicefeatureplans from "../../component/adminService/servicefeatureplans";


const AdminService = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
        <AdminNav />
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">


          <Serviceherosec />
          <Serviceaccordin />
          <Servicefeatureplans />
        
        
      </div>
    </main>
  );
};

export default AdminService;
