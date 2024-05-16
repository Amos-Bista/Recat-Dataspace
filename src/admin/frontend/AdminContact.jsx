import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import ContactAdminTable from "../../component/adminContact/contactadmintable";

const AdminContact = () => {
  return (
    <>
      <main className="flex align-middle  bg-gray-200  py-28">
        <AdminNav />
        <div className="w-full px-2 py-6 mr-10 bg-gray-200 rounded-lg">
          <HomeHero />
          <ContactAdminTable />
        </div>
      </main>
    </>
  );
};

export default AdminContact;
