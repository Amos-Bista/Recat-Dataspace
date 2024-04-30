import React, { useState, useEffect, useRef } from "react";
import navItems from "../assests/navItems.json";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleServiceClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`px-8  ${scrolled ? "bg-white" : ""}`}>
      <div className="relative flex justify-between h-32 px-6 mt-0 align-middle">
        <img src="/dataspacelogo1.png" alt="" className="absolute h-16 top-5" />
        <div className="flex">
          <ul
            className={`flex gap-8 absolute top-12 right-2 font-light text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:underline underline-offset-1 active:text-blue-900"
              >
                {item.dropdown ? (
                  <div className="relative" onClick={handleServiceClick}>
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
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                )}
              </li>
            ))}
          </ul>
      
        </div>
      </div>
    </div>
  );
};

export default NavBar;