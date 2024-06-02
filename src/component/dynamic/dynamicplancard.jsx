import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamicPlans from "../../assests/dynamic/dynamicPlans.json";
const DynamicPlanCard = ({ id }) => {
  const [plansData, setPlansData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the autoplay speed as needed
    speed: 5000,
    slidesToShow: 3,
    vertical: false, // Set to false for horizontal autoplay
  };

  useEffect(() => {
    // Convert the object to an array of plans
    const plansArray = Object.entries(dynamicPlans).map(
      ([planName, planDetails]) => ({
        name: planName,
        details: planDetails,
      })
    );
    setPlansData(plansArray);
  }, []);

  return (
    <div>
<div className="w-full h-full  mb-8 relative">
    <div className="w-[70px] h-[508px] bg-white z-50 absolute left-0"></div>
    <div className="z-40 w-full h-full relative">
        <Slider {...settings}>
            {plansData.map((plan, index) => (
                <Card
                    key={index}
                    sx={{ maxWidth: 355, marginBottom: 4, maxHeight: 700 }}
                    className="pb-8 mx-12"
                >
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/plans.png" // Update this path to the correct path of your image
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
                    <CardActions className="flex justify-center">
                        <Button variant="contained">Add to Cart</Button>
                    </CardActions>
                </Card>
            ))}
        </Slider>
    </div>
    <div className="w-[100px] h-[508px] bg-white z-50 absolute  top-0 right-0"></div>
</div>
    </div>
    

  );
};

export default DynamicPlanCard;
