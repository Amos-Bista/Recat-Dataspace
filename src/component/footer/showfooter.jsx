import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowFooter = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("this is location", location);
    if (
      location.pathname === "/admincontact" ||
      location.pathname === "/adminhome" ||
      location.pathname === "/adminservice" ||
      location.pathname === "/adminabout"
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);

  return <div>{show && children}</div>;
};

export default ShowFooter;
