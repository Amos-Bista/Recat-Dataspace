import React, { useState, useEffect } from "react";

const Milestone = () => {
  const [milestoneData, setMilestoneData] = useState({
    desc1: "Years of Experience",
    count1: 0,
    desc2: "Satisfied Clients",
    count2: 0,
    desc3: "Valued Partners",
    count3: 0,
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("lastMilestoneData"));
    if (storedData) {
      setMilestoneData({
        desc1: storedData.desc1 || "Years of Experience",
        count1: parseInt(storedData.count1, 10) || 0,
        desc2: storedData.desc2 || "Satisfied Clients",
        count2: parseInt(storedData.count2, 10) || 0,
        desc3: storedData.desc3 || "Valued Partners",
        count3: parseInt(storedData.count3, 10) || 0,
      });
    }
  }, []);

  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{milestoneData.count1}</h1>
        <p className="text-sm font-semibold text-center">
          {milestoneData.desc1}
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{milestoneData.count2}</h1>
        <p className="text-sm font-semibold text-center">
          {milestoneData.desc2}
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{milestoneData.count3}</h1>
        <p className="text-sm font-semibold text-center">
          {milestoneData.desc3}
        </p>
        </div>
    </div>
  );
};

export default Milestone;
