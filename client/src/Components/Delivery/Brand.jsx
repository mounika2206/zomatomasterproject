import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoLogoSass } from 'react-icons/io';
import Slider from 'react-slick';
import { NextArrow,PreviousArrow } from "../carousalarrow";
const Brand = (props) => {
    const logos=[
        "https://b.zmtcdn.com/data/brand_creatives/logos/85b28733a8b2a12940a536859928ec03_1599801040.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7e899e9cb047066beb5a5aea63f34911_1599548498.png",
        
        "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502724.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/98cd1bf571a1b58fdd9657a88f9342cf_1492593540.png",
    ]
    const settings={
        infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
        <div className="my-5 mb-32">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div className="w-24 h-24 mx-3 bg-white shadow">
              <img src={logo} alt="brand" className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

export default Brand;
