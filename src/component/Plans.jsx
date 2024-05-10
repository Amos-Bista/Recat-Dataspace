import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plan from "../assests/plan.json";

export default function Plans() {
  const [plansData, setPlansData] = useState([]);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the autoplay speed as needed
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 8,
    vertical: false, // Set to false for horizontal autoplay
    
  };

  useEffect(() => {
    // Convert the object to an array of plans
    const plansArray = Object.entries(plan).map(([planName, planDetails]) => ({
      name: planName,
      details: planDetails,
    }));
    setPlansData(plansArray);
  }, []);

  return (
    <Slider {...settings}>
      {plansData.map((plan, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 355, marginBottom: 20 }}
          className="pb-12 mx-16 mt-12"
        >
          <CardMedia
            sx={{ height: 140 }}
            image="./plans.png" // Update this path to the correct path of your image
            title="Green Iguana"
          />
          <CardContent className="flex-col justify-center text-center">
            <Typography gutterBottom variant="h5" component="div">
              {plan.name}
            </Typography>
            {plan.details.map((detail, idx) => (
              <Typography key={idx} variant="body2" color="text.secondary">
                <span>{detail.title}:</span>
                {detail.description}
              </Typography>
            ))}
          </CardContent>
          <CardActions className="flex justify-center ">
            <Button variant="contained">Add to Cart</Button>
          </CardActions>
        </Card>
        
      ))}
    </Slider>
  );
}
