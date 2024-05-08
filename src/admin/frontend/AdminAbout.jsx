import React, { useState } from "react";
import Herosec from "../../component/adminHome/herosec";
import AdminNav from "../../component/adminHome/adminNav";
import { Button } from "@mui/material";
import Contactuscard from "../../component/adminContact/contactuscard";
import Addpopup from "./AddPopUp"; // Import the AddPopup component


const AdminAbout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddNewClick = () => {
    setIsPopupOpen(true); 
  // Open the popup when "Add New +" is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
     // Close the popup
  };

  return (
    <main className="flex align-middle bg-[#0D5077] py-28">
      <div className="ml-1">
        <AdminNav />
      </div>
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg">
        <div className="flex justify-between align-middle">
          <h1>About</h1>
          <Button
            variant="contained"
            className="flex items-end align-end"
            onClick={handleAddNewClick} // Call handleAddNewClick when button is clicked
          >
            Add New +
          </Button>
        </div>
        <Herosec />
        <Contactuscard />
        {isPopupOpen && <Addpopup onClose={handleClosePopup} />}{" "}
        {/* Render AddPopup if isPopupOpen is true */}
      </div>
    </main>
  );
};

export default AdminAbout;
