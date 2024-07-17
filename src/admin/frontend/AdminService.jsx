import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import Serviceherosec from "../../component/adminService/serviceherosec";
import ServiceAdd from "../../component/adminService/serviceAdd";

const AdminService = () => {
  return (
    <main className="flex align-middle bg-gray-200 py-28 ">
      <AdminNav />
      <div className="w-full py-2 pr-20 bg-gray-200 rounded-lg ">
        <ServiceAdd />
        <div className="w-[full] h-full  rounded-lg ">
          <Serviceherosec />
        </div>
      </div>
    </main>
  );
};

export default AdminService;
