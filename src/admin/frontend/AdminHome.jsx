import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import Navigation from "../../component/adminHome/navigation";
import ValuableclientTable from "../../component/adminHome/valuableclientTable";
import ServiceAdd from "../../component/adminService/serviceAdd";
import Serviceherosec from "../../component/adminService/serviceherosec";

const AdminHome = () => {
  return (
    <main className="flex bg-gray-200 py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14">
        {/* <Navigation /> */}
        {/* < HomeHero /> */}
        <div className="w-full py-2 bg-gray-200 rounded-lg ">
          <ServiceAdd />
          <div className="w-[full] h-full  rounded-lg ">
            <Serviceherosec />
          </div>
        </div>
        <ValuableclientTable />
      </div>
    </main>
  );
};

export default AdminHome;
