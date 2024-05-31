import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AddServicePage from "../../component/adminService/addservicepage";
import Serviceherosec from "../../component/adminService/serviceherosec";

const AdminService = () => {
  return (
    <main className="flex align-middle  bg-gray-200  py-28">
      <AdminNav />
      <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mr-14">
        <AddServicePage />
        <div className=" w-full h-full rounded-lg  px-2">
          <Serviceherosec />
        </div>
      </div>
    </main>
  );
};

export default AdminService;
