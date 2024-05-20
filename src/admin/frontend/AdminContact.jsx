import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import ContactHero from "../../component/adminContact/contacthero"
import ContactInfo from "../../component/adminContact/contactinfo";
const AdminContact = () => {
  return (
    <>
      <main className="flex align-middle  bg-gray-200  py-28">
        <AdminNav />
        <div className="w-full px-2 py-6 mr-10 bg-gray-200 rounded-lg mt-[-40px]">
          <ContactHero/>
          <ContactInfo />
        </div>
      </main>
    </>
  );
};

export default AdminContact;
