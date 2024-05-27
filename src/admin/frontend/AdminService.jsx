import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AddServicePage from "../../component/adminService/addservicepage";
import Serviceherosec from "../../component/adminService/serviceherosec";
import Serviceaccordin from "../../component/adminService/serviceaccordin";
import Servicefeatureplans from "../../component/adminService/servicefeatureplans";
import servicehero from "../../assests/servicehero.json";

const AdminService = () => {
  return (
    <main className="flex align-middle  bg-gray-200  py-28">
      <AdminNav />
      <div className="w-full px-2 py-2 bg-gray-200 rounded-lg mr-14">
        <AddServicePage />
        <div className="bg-[#256184] w-full h-full rounded-lg  pt-6 px-2">
          {servicehero.map((service) => (
            <div key={service.id} className="service-item">
              <h1>{service.title}</h1>
            </div>
          ))}
          <Serviceherosec />
          <Serviceaccordin />
          <Servicefeatureplans />
        </div>
      </div>
    </main>
  );
};

export default AdminService;
