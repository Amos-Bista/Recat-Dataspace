import React from "react";

import AdminNav from "../../component/adminHome/adminNav";
import FooterTable from "../../component/adminHome/footertable";
import HomeHero from "../../component/adminHome/homehero";
import Navigation from "../../component/adminHome/navigation";
import Servicefeatureplans from "../../component/adminService/servicefeatureplans";
import ValuableclientTable from "../../component/adminHome/valuableclientTable";

const AdminHome = () => {
  return (
    <main className="flex gap-10 bg-[#0D5077]  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
        

        <div >
          <Navigation />
          <HomeHero />
          < Servicefeatureplans />
          <ValuableclientTable/>
          <FooterTable />
        </div>
        </div>

     
    </main>
  );
};

export default AdminHome;
