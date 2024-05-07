import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import aboutData from "../../assests/aboutData.json";

const Aboutcard = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(aboutData);

    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <div className="px-10 py-8 flex flex-wrap justify-center gap-x-[160px] gap-y-[90px]">
      <div className="flex flex-wrap justify-center gap-x-[160px] gap-y-[90px]">
        {Array.isArray(rowData) &&
          rowData.map((row, index) => (
            <Card
              key={index}
              sx={{
                width: 605,
                height: 441,
                paddingX: 4,
                borderRadius: 3,
                boxShadow: "12px 12px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fafbfa",
              }}
            >
              <CardMedia
                sx={{
                  height: 0,
                  paddingTop: "10.25%",
                  backgroundSize: "contain",
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
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  {row[0].title}
                </Typography>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    textAlign: "justify",
                    minWidth: 30,
                    paddingX: 4,
                    fontSize: "16px",
                    lineHeight: "29px",
                    fontWeight: 300,
                  }}
                >
                  {row[0].description}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Aboutcard;
