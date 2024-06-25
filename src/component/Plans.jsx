import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plan from "../assests/plan.json";

export default function Plans() {
  const [plansData, setPlansData] = useState([]);
  const settings = {
    padding: "0px",
    marginBottom: "0px",
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the autoplay speed as needed
    speed: 5000,
    slidesToShow: 3,
    Vertical: false, // Set to false for horizontal autoplay
  };

  useEffect(() => {
    // Convert the object to an array of plans

    setPlansData(plan);
  }, []);

  return (
    <div className="px-12">
      <Slider {...settings} className="">
        {plansData.map((plan, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 355, marginBottom: 0 }}
            className="flex mx-12 mt-12 sm:w-12 "
          >
            <div className="h-24 rounded-t-md bg-[#0D5077] flex-col justify-center items-center ">
              <div className="items-center pt-2">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="mt-6 text-center text-white"
                >
                  {plan.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h10"
                  component="div"
                  className="text-center text-white"
                >
                  {plan.subtitle}
                </Typography>
              </div>
            </div>

            <CardContent className="flex-col justify-center text-center bg-slate-200 ">
              {plan.details.map((detail, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary">
                  <span>{detail.title}:</span>
                  {detail.description}
                </Typography>
              ))}
              {plan.details.map((detail, idx) => (
                <h1 className="font-serif text-2xl font-slate-900 text-m">
                  {detail.pricedescription}
                </h1>
              ))}
            </CardContent>
            <CardActions className="flex justify-center pb-24 bg-slate-200">
              <Button variant="contained">Add to Cart</Button>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
