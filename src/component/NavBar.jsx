import React, { useState, useEffect, useRef } from "react";
import Services from "../pages/services";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const NavItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Contact", link: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleServiceMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleServiceMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`pl-7 pr-7 ${scrolled ? "bg-white" : ""}`}>
      <div className="relative flex justify-between h-32 px-6 mt-0 align-middle">
        <a href="/">
          <img
            src="/dataspacelogo1.png"
            alt=""
            className="absolute h-8 mx-auto top-5 sm:h-10 md:h-12 lg:h-14 xl:h-16"
          />
        </a>
        <div className="flex items-center justify-end w-full h-20 align-middle">
          <button className="block mt-0 align-middle md:hidden" onClick={toggleMenu}>
            <svg
              className="h-10 align-middle"
              fill="none"
              color="#FFFFFF"
              stroke="currentColor"
              viewBox="0 0 24 24"
              
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`hidden md:flex gap-8 font-light text-xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {NavItems.map((item, index) => (
              <li key={index} className="hover:underline active:text-blue-900">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleServiceMouseEnter}
                    onMouseLeave={handleServiceMouseLeave}
                  >
                    <span>{item.title}</span>
                    {showDropdown && (
                      <ul
                        ref={dropdownRef}
                        className={`absolute text-black top-full left-0 shadow-md rounded-b-lg ${
                          scrolled
                            ? "bg-white text-black"
                            : "bg-[#062435] text-white"
                        }`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className={`block w-64 text-m hover:bg-blue-100/90 py-2 px-2 ${
                                scrolled ? "text-black" : "text-white"
                              }`}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active underline decoration-white "
                        : ""
                    }
                    to={item.link}
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="flex align-top">
              <Services />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-50 w-32 bg-[#0D5077] shadow-md transition-transform duration-300 ease-in-out transform pt-12 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute text-xl top-4 right-4"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            size={30}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8 py-4 text-white ">
          {NavItems.map((item, index) => (
            <li key={index} className="hover:underline ">
              {item.dropdown ? (
                <div className="relative">
                  <span className="bg-white active:text-blue-900 active:bg-white">{item.title}</span>
                  <ul className="absolute left-0 text-black bg-white rounded-b-lg shadow-md top-full">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          onClick={handleMenuItemClick}
                          href={subItem.link}
                          className="block text-black py-22 text-m hover:bg-white"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active underline decoration-white "
                      : ""
                  }
                  to={item.link}
                  onClick={handleMenuItemClick}
                >
                  {item.title}
                </NavLink>
              )}
            </li>
          ))}
          <li className="flex align-top">
            <Services />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
