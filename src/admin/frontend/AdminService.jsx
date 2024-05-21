import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AdminAddService from "../../component/adminService/adminAddService";
import Serviceherosec from "../../component/adminService/serviceherosec";
import Serviceaccordin from "../../component/adminService/serviceaccordin";
import Servicefeatureplans from "../../component/adminService/servicefeatureplans";

const AdminService = () => {
  return (
    <main className="flex align-middle bg-gray-200 py-28">
      <AdminNav />
      <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mr-14">
        <AdminAddService />
        <Serviceherosec />
        <Serviceaccordin />
        <Servicefeatureplans />
      </div>
    </main>
  );
};

export default AdminService;
