import React from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

const AdminNav = () => {
  return (
    <main className="flex justify-center py-4 rounded-lg mx-14 flex-inline bg-[white] h-[240px] ">
      <nav className="w-64">
        <h1 className="px-4 py-2 text-xl font-semibold text-[#0D5077]">
          Dashboard
        </h1>
        <ul className="mx-auto font-semibold text-xl text-[#0D5077]">
          <NavLink
            to="/adminhome"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-white bg-[#0D5077]/90"
                : ""
            }
          >
            {({ isActive }) => (
              <li
                className={`px-4 flex items-center ${
                  isActive ? "bg-[#0D5077]/90 text-white" : ""
                }`}
              >
                <HomeIcon
                  style={{ fontSize: "2.5rem" }}
                  className="ml-[-0.4rem] h-5 pr-4 text-current"
                />
                Home
              </li>
            )}
          </NavLink>
          <NavLink
            to="/admincontact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-white bg-[#0D5077]/90"
                : ""
            }
          >
            {({ isActive }) => (
              <li
                className={`px-4 flex items-center ${
                  isActive ? "bg-[#0D5077]/90 text-white" : ""
                }`}
              >
                <EmailIcon
                  style={{ fontSize: "2.5rem" }}
                  className="ml-[-0.4rem] h-5 pr-4 text-current"
                />
                Contact
              </li>
            )}
          </NavLink>

          <NavLink
            to="/adminabout"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-white bg-[#0D5077]/90"
                : ""
            }
          >
            {({ isActive }) => (
              <li
                className={`px-4 flex items-center ${
                  isActive ? "bg-[#0D5077]/90 text-white" : ""
                }`}
              >
                <InfoIcon
                  style={{ fontSize: "2.5rem" }}
                  className="ml-[-0.4rem] h-5 pr-4 text-current"
                />
                About
              </li>
            )}
          </NavLink>

          <NavLink
            to="/adminservice"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-white bg-[#0D5077]/90"
                : ""
            }
          >
            {({ isActive }) => (
              <li
                className={`px-4 flex items-center ${
                  isActive ? "bg-[#0D5077]/90 text-white" : ""
                }`}
              >
                <MiscellaneousServicesIcon
                  style={{ fontSize: "2.5rem" }}
                  className="ml-[-0.4rem] h-5 pr-4 text-current"
                />
                Service
              </li>
            )}
          </NavLink>
        </ul>
      </nav>
    </main>
  );
};

export default AdminNav;
