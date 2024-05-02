import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import aboutData from "../../assests/aboutData.json";

const Aboutcard = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(aboutData);
    console.log(data);
    
    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <div className="px-8 py-8 flex justify-center">
       {Array.isArray(rowData) && rowData.map((row, index) => (
      <Card key={index}
        sx={{
          width: 750,
          height: 400,
          paddingX: 4,
          borderRadius: 3,
          boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "10.25%", // 16:9 aspect ratio (adjust as needed)
            backgroundSize: "contain",
            marginTop: 0, // Align content vertically to the center
          }}
          image={row[0].image}
          title={row[0].title}
        />
        <CardContent sx={{ paddingTop: 2 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              textAlign: "justify",
              display: "flex",  
              justifyContent: "center",
              paddingY: 0,
            }}
          >
            {row[0].title}
          </Typography >
          <Typography
            variant="h6"
            color="black"
            sx={{
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
              minWidth: 30,
              paddingX: 4,
            }}
          >
            {row[0].description}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </div>
  );
};

export default Aboutcard;