import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const HeroLearnMore = ({ onServiceClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rows, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/services/getServices`
      );
      setRowData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (service) => {
    onServiceClick(service.servicePath);
   
    // handleMenuClose();
  };

  return (
    <div>
      <Button
        style={{
          backgroundColor: "green",
          color: "#fff",
        }}
        variant="contained"
        onClick={handleMenuOpen}
      >
        Select Link
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {rows.map((service) => (
          <MenuItem
            key={service.id}
            onClick={() => handleMenuItemClick(service)}
          >
            {service.serviceName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HeroLearnMore;
