import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AboutCardTable from "../../component/adminAbout/aboutCardtable";
import AboutHero from "../../component/adminAbout/aboutHeroSectiontable";
const AdminAbout = () => {
  return (

    <main className="  w-full flex align-middle bg-gray-200  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14 mt-[-40px]">
        <AboutHero />
        <AboutCardTable />
      </div>
    </main>
  );
};

export default AdminAbout;
