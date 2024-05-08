import React from "react";

import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import Navigation from "../../component/adminHome/navigation";

const AdminHome = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#eff0f9]  py-28">
      <AdminNav />
     
        
        <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
          <Navigation />
        <HomeHero />
        
        </div>
    </main>
  );
};

export default AdminHome;
