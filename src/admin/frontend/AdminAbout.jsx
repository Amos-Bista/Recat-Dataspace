import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import AboutHero from "../../component/adminAbout/aboutHeroSectiontable";
import AdminAccordionTable from "../../component/adminAbout/aboutAccordioTable";
import MilestoneForm from "../../component/adminAbout/milestoneform";
import { useState } from "react";

const AdminAbout = () => {
  const [milestoneData, setMilestoneData] = useState({
    milestones: [
      { desc: "", count: 0 },
      { desc: "", count: 0 },
      { desc: "", count: 0 },
    ],
  });
  console.log(milestoneData)

  const handleFormSubmit = (formData) => {
    // Update milestoneData with formData
    const newMilestones = [
      { desc: formData.desc1, count: parseInt(formData.count1) },
      { desc: formData.desc2, count: parseInt(formData.count2) },
      { desc: formData.desc3, count: parseInt(formData.count3) },
    ];
    setMilestoneData({ milestones: newMilestones });
  };
  return (
    <main className="flex w-full align-middle bg-gray-200 py-28">
      <AdminNav />
      <div className="w-full bg-gray-200 rounded-lg mr-14">
        <AboutHero />
        <AdminAccordionTable />
        {/* <AboutCardTable /> */}

        <div className=" shadow-lg w-[100%]">
          <MilestoneForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  );
};

export default AdminAbout;
