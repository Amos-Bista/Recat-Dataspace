import React, { useState, useEffect } from "react";

const DEFAULT_MILESTONE_DATA = {
  desc1: "Years of Experience",
  count1: 0,
  desc2: "Satisfied Clients",
  count2: 0,
  desc3: "Valued Partners",
  count3: 0,
};

const Milestone = () => {
  const [milestoneData, setMilestoneData] = useState(DEFAULT_MILESTONE_DATA);
  const [displayCounts, setDisplayCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      try {
        const storedData = JSON.parse(
          localStorage.getItem("lastMilestoneData")
        );
        if (storedData) {
          setMilestoneData({
            desc1: storedData.desc1 || DEFAULT_MILESTONE_DATA.desc1,
            count1:
              parseInt(storedData.count1, 10) || DEFAULT_MILESTONE_DATA.count1,
            desc2: storedData.desc2 || DEFAULT_MILESTONE_DATA.desc2,
            count2:
              parseInt(storedData.count2, 10) || DEFAULT_MILESTONE_DATA.count2,
            desc3: storedData.desc3 || DEFAULT_MILESTONE_DATA.desc3,
            count3:
              parseInt(storedData.count3, 10) || DEFAULT_MILESTONE_DATA.count3,
          });
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const { count2 } = milestoneData;
    let start = 0;
    const duration = 5000; // Duration of the animation in milliseconds
    const stepTime = 20; // Time between each increment

    const animateCount = (targetCount, countKey) => {
      const increment = targetCount / (duration / stepTime);
      const intervalId = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          clearInterval(intervalId);
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: targetCount,
          }));
        } else {
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: Math.ceil(start),
          }));
        }
      }, stepTime);
    };

    animateCount(count2, "count2");
  }, [milestoneData]);

  useEffect(() => {
    const { count3 } = milestoneData;
    let start = 0;
    const duration = 5600; // Duration of the animation in milliseconds
    const stepTime = 20; // Time between each increment

    const animateCount = (targetCount, countKey) => {
      const increment = targetCount / (duration / stepTime);
      const intervalId = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          clearInterval(intervalId);  
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: targetCount,
          }));
        } else {
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: Math.ceil(start),
          }));
        }
      }, stepTime);
    };

    animateCount(count3, "count3");
  }, [milestoneData]);
  useEffect(() => {
    const { count1 } = milestoneData;
    let start = 0;
    const duration = 5500; // Duration of the animation in milliseconds
    const stepTime = 20; // Time between each increment

    const animateCount = (targetCount, countKey) => {
      const increment = targetCount / (duration / stepTime);
      const intervalId = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          clearInterval(intervalId);
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: targetCount,
          }));
        } else {
          setDisplayCounts((prevCounts) => ({
            ...prevCounts,
            [countKey]: Math.ceil(start),
          }));
        }
      }, stepTime);
    };

    animateCount(count1, "count1");
  }, [milestoneData]);

  return (
    <div className="flex pl-[600px] gap-12 bg-[#5990b9] py-6 text-white">
      <div>
        <h1 className="flex justify-center text-6xl font-bold">
          +{displayCounts.count3}
        </h1>
        <p className="text-xl font-bold text-center">{milestoneData.desc3}</p>
      </div>

      <div>
        <h1 className="flex justify-center text-6xl font-bold">
          +{displayCounts.count2}
        </h1>
        <div>
          <p className="text-xl font-bold text-center">{milestoneData.desc2}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">+{displayCounts.count1}</h1>
        <div>
          <p className="text-xl font-bold text-center">{milestoneData.desc1}</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
