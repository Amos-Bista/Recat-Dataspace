import React from "react";

const AdminNav = () => {
  return (
    <main className="flex justify-center py-4 bg-white rounded-lg mx-14 flex-inline">
      <nav className="w-64">
        <h1 className="px-4 py-2 text-2xl font-bold text-[#0D5077]">
          Dashboard
        </h1>
        <ul className="mx-auto font-semibold text-2xl text-[#0D5077]">
          <a href="./adminhome" >
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   aligin-middle items-center">
              <img src="homeicon.png" alt="" className="h-5 pr-4"  />
              Home
            </li>
          </a>
          <a href="./admincontact">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   aligin-middle items-center">
              <img src="contacticon.png" alt="" className="h-5 pr-4" />
              Contact
            </li>
          </a>
          <a href="./adminabout">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   aligin-middle items-center">
              <img src="abouticon.png" alt="" className="h-5 pr-4" />
              About
            </li>
          </a>
          <a href="./adminservice">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   aligin-middle items-center">
              <img src="serviceicon.png" alt="" className="h-5 pr-4" />
              Service
            </li>
          </a>
        </ul>
      </nav>
    </main>
  );
};

export default AdminNav;
