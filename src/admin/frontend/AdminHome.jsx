import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import Navigation from "../../component/adminHome/navigation";
import ValuableclientTable from "../../component/adminHome/valuableclientTable";

const AdminHome = () => {
  return (
    <main className="flex bg-gray-200  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14">
        <Navigation />
        {/* <HomeHero /> */}
        <ValuableclientTable />
      </div>
    </main>
  );
};

export default AdminHome;
