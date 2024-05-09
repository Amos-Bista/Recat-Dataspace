import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import ContactAdminTable from "../../component/adminContact/contactadmintable";
import PostDataForm from "../../component/adminContact/PostFormData";

const AdminContact = () => {
  return (
    <>
      <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
        <div className="ml-1">
          <AdminNav />
        </div>
        <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
          <HomeHero />
          <ContactAdminTable />
        </div>
      </main>
    </>
  );
};

export default AdminContact;
