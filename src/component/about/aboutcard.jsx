import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type AboutcardProps = {
  title: string;
  description: string;
  image: string;
};
const Aboutcard: React.FC<AboutcardProps> = ({ title, description, image }) => {
  return (
    <div className="px-8 py-8 flex justify-center">
      <Card
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
          image={image}
          title={title}
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
            {title}
          </Typography>
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
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Aboutcard;
