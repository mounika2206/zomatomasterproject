import React from "react";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import MenuCollection from "./MenuCollection";
import MenuCollectionCard from "./MenuCollectionCard";
import Slider from "react-slick";
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
        prevArrow:<PrevArrow/>
    };
    return(<>
    <div className="flex flex-col md:flex-row relative">
        <div className="w-full  md:w-3/5">
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
               image="https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp"/>

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
       </div>
        <aside
        style={{height:"fit-content"}}
         className="hidden md:block md:w-2/5 sticky top-2 bg-white p-3
         shadow-xl">

        </aside>

    </div>
    </>
    );
};
export default Overview;