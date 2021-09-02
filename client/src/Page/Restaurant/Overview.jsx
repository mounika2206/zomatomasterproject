import React from "react";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";

import Mapview from "../../Components/restaurant/Mapview";
import MenuCollection from "./MenuCollection";
import MenuCollectionCard from "./MenuCollectionCard";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import { PrevArrow,NextArrow } from "../../Components/carousalarrow";
const Overview=()=>

{
    const {id}=useParams();
    const settings={
        arrows:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
        },
        ],
    };
    
    const ratingChanged=(newRating)=>
    {
      console.log(newRating);
    };
    return(<>
    <div className="flex flex-col md:flex-row relative">
        <div className="w-full  md:w-8/12">
        <h2  className="font-semibold text-lg md:text-xl my-4">About this place</h2>
       <div className="flex justify-between items-center">
           <h4 className="text-lg  font-medium">Menu</h4>
           <Link to={`/restaurant/${id}/menu`}>
               <span className="flex  items-center gap-1 text-zomato-400">
                   see all menu<IoMdArrowDropright/>
               </span>
           </Link>
          
       </div>
       <div className="flex flex-wrap gap-3">
               <MenuCollection menutitle="Menu" pages="3" 
               image="https://b.zmtcdn.com/data/menus/517/90517/5b2bdc823e1d8e89e6cf142e55a37456.jpg"/>

           </div>
           <h4 className="text-lg  font-medium my-4">Cuisines</h4>
           <div className="flex flex-wrap gap-4">
               <span className=" border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
               <span className=" border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
               <span className=" border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
           </div>
           <div className="my-4">
           <h4 className="text-lg  font-medium ">Average Cost</h4>
           <h6>Rs.100 for one order (approx.)</h6>
           <small className="text-gary-500">Exclusive of applicable taxes
           and charges </small>
           </div>
           <div className="my-4">
               <h4 className="text-lg  font-medium">Similar Restaurants</h4>
            
            <Slider {...settings}>
                <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
              <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
              <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
              <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
              <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
              <MenuCollectionCard
            image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"
            title="Tea"
            /> 
          
            </Slider>  
</div>
       <div className="my-4">
         <h4 className="text-lg font-medium">Rate your delivery Experience
          </h4>
          <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                />

       </div>
       <div className="my-4 w-full  md:hidden flex flex-col gap-4">
       <Mapview title="Hyderabad Xpress" phno="9182723885"
           mapLocation={[12.988134202889283, 77.59405893120281]}
           address="15 ,Sigma Central Mail"
/>           
       </div>
       <div className="my-4 flex flex-col gap-4 ">
         <ReviewCard/>
         <ReviewCard/>
         <ReviewCard/>
       </div>

       </div>
        <aside
        style={{height:"fit-content"}}
         className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3
         shadow-md flex flex-col gap-4 ">
           <Mapview title="Hyderabad Xpress" phno="9182723885"
           mapLocation={[12.988134202889283, 77.59405893120281]}
           address="15 ,Sigma Central Mail"
/>           
        </aside>

    </div>
    </>
    );
};
export default Overview;