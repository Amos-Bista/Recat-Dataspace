import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [milestones, setMilestones] = useState([]);

  const addMilestone = (milestone) => {
    setMilestones((prevMilestones) => [...prevMilestones, milestone]);
  };

  return (
    <FormContext.Provider value={{ milestones, addMilestone }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
