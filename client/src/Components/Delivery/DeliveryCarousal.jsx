import React from "react";
import DeliveryCatagory from "./DeliveryCatagory";
import Slider from "react-slick";
import { NextArrow,PreviousArrow } from "../carousalarrow";
const DeliveryCarousal=()=>
{
    const categories=[{
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
        title:"Panner",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
        title:"Burger",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
        title:"Rolls",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",
        title:"Dosa",
    },

    {
        image:"https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
        title:"Burger",
    },



    
];
const settings={
    arrows:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PreviousArrow/>
};
    return(
    <>
    <h1 className="text-xl mb-4 font-semibold">Inspiration for your first Order</h1>
    <div className=" lg:hidden flex gap-3 lg: gap-0 flex-wrap justify-between">
       {
           categories.map((food)=>
        (
               <DeliveryCatagory{...food}/>
           ))
       }
        
    </div>
    <div className="hidden lg:block">
<Slider{...settings}>
{
           categories.map((food)=>
        (
               <DeliveryCatagory{...food}/>
           ))
       }
</Slider>
    </div>
    </>
    );

};
export default DeliveryCarousal;