import React, { useState, useEffect } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CircleIcon from "@mui/icons-material/Circle";
import GroupAddIcon from "@mui/icons-material/GroupAdd"; // Import GroupAddIcon for Add Admin

const AdminNav = () => {
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="flex justify-center py-4 rounded-lg mx-14 flex-inline bg-[white] h-fit ">
      <nav className="w-64">
        <h1 className="px-4 py-2 text-xl font-medium text-[#0D5077]">
          Dashboard
        </h1>
        <ul className="mx-auto font-medium text-lg text-[#0D5077]">
          <NavLink
            to="/adminAdd"
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
                <GroupAddIcon
                  style={{ fontSize: "2.5rem" }}
                  className="ml-[-0.4rem] h-5 pr-4 text-current"
                />
                Add Admin
              </li>
            )}
          </NavLink>
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

          {/* Add Admin NavLink */}

          {rows.map((service) => (
            <div key={service.id}>
              <NavLink
                to={`/adminservicepage/${service.id}`}
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
                    key={service.id}
                    className={`px-4 flex items-center
                     text-blue-900 mb-3 mt-3`}
                  >
                    <CircleIcon
                      style={{ fontSize: "1.5rem" }}
                      className="ml-[2rem] h-5 pr-4 text-current"
                    />
                    {service.serviceName}
                  </li>
                )}
              </NavLink>
            </div>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default AdminNav;
