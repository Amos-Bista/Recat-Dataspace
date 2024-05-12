import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import aboutaccordion from "../../assests/accordionJson/aboutaccordion.json";

const Aboutcard = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const data = Object.values(aboutaccordion);
    console.log(data);

    // Set rowData state with all data from JSON
    setRowData(data);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-[69px] gap-y-[60px]">
        {Array.isArray(rowData) &&
          rowData.map((row, index) => (
            <Card
              key={index}
              sx={{
                paddingTop: 2,
                width: 565,
                height: 288,
                paddingX: 0.01,
                // boxShadow: "1px 1px 10px  #d5d4d5,-1px -1px 13px #d5d4d5",
                backgroundColor: "#fafbfa",
              }}
            >
              <CardMedia
                sx={{
                  height: 10,
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
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "23px",
                  }}
                >
                  {row[0].title}
                </Typography>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    textAlign: "justify",
                    // minWidth: 30,
                    paddingX: 1,
                    fontSize: "15px",
                    fontFamily: "Poppins",
                    lineHeight: "26px",
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
