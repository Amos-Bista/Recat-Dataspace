import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import LandingEdit from "../../component/adminContact/landingEdit";
const AdminContact = () => {
  return (
    <>
      <main className="flex align-middle bg-gray-200 py-28">
        <AdminNav />
        <div className="w-full px-2 bg-gray-200 rounded-lg 10 ">
          {/* <ContactHero />
          <ContactInfo />  */}
          <LandingEdit />
        </div>
      </main>
    </>
  );
};

export default AdminContact;
