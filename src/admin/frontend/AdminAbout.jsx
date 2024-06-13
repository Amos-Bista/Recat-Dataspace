import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AboutCardTable from "../../component/adminAbout/aboutCardtable";
import AboutHero from "../../component/adminAbout/aboutHeroSectiontable";
import AdminAccordionTable from "../../component/adminAbout/aboutAccordioTable";
const AdminAbout = () => {
  return (

    <main className="flex w-full align-middle bg-gray-200 py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14 mt-[-40px]">
        <AboutHero />
        <AdminAccordionTable />
        <AboutCardTable />
      </div>
    </main>
  );
};

export default AdminAbout;
