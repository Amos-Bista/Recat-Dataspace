import React from "react";
import { Home as HomeIcon } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const AdminNav = () => {
  return (
    <main className="flex justify-center py-4 rounded-lg mx-14 flex-inline bg-[white] h-[272px] ">
      <nav className="w-64">
        <h1 className="px-4 py-2 text-2xl font-bold text-[#0D5077]">
          Dashboard
        </h1>
        <ul className="mx-auto font-semibold text-2xl text-[#0D5077]">
          <a href="./adminhome" >
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex  items-center">
            <HomeIcon style={{ fontSize: '3rem' }} className=" ml-[-0.4rem] h-5 pr-4 text-current hover:text-white" />
              Home
            </li>
          </a>
          <a href="./admincontact">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex items-center">
            <EmailIcon style={{ fontSize: '3rem' }} className=" ml-[-0.4rem] h-5 pr-4 text-current hover:text-white" />
              Contact
            </li>
          </a>
          <a href="./adminabout">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   align-middle items-center">
            <InfoIcon style={{ fontSize: '3rem' }} className=" ml-[-0.4rem] h-5 pr-4 text-current hover:text-white" />
              About
            </li>
          </a>
          <a href="./adminservice">
            <li className="px-4 hover:bg-[#0D5077]/90 hover:text-white flex   aligin-middle items-center">
            <MiscellaneousServicesIcon style={{ fontSize: '3rem' }} className=" ml-[-0.4rem] h-5 pr-4 text-current hover:text-white" />
              Service
            </li>
          </a>
        </ul>
      </nav>
    </main>
  );
};

export default AdminNav;
