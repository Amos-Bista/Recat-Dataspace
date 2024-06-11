import { Box } from "@mui/material";
import React from "react";
import ServiceAdd from "./serviceAdd";

const AddServicePage = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-between mt-[10px] mb-9 ">
        <h3 className=" text-2xl font-[400] text-[#0D5077]  ">Serviceeeee Page</h3>
        <Box>
          <ServiceAdd />
        </Box>
      </div>
    </div>
  );
};

export default AddServicePage;
