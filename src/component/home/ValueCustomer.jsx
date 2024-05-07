import React from 'react';
import Slider from 'react-slick';
import customerData from '../../assests/customerData.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ValueCustomer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1, 
    prevArrow: <button className="slick-arrow slick-prev">&#60;</button>,
    nextArrow: <button className="slick-arrow slick-next">&#62;</button> 
  };

  

  return (
    <Slider {...settings}>
      {customerData.map((customer, index) => (
        <div key={customer.id} >
          <img
            src={customer.image}
            alt={`Customer ${index + 1}n`}
            className="w-32 h-32 rounded-md ml-14"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ValueCustomer;
