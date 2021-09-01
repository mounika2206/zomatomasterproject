import React,{useState} from "react";
import DeliveryCarousal from "./DeliveryCarousal";
//import Brand from "./Brand";
import RestaurantCard from "./RestaurantCard";

const Delivery=()=>
{
    const[restaurantList,setRestaurantList]=useState([
        {
            _id:"123456",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/9/91999/1ab44247d8a98712e07dd1dc3ef7cc97_o2_featured_v2.jpg?output-format=webp",
              ],
              name:"Biryani party",
              cuisine:["Street Food","Beverages","tea"],
              aveargeCost:100,
              isPro:true,
              isOff:80,
              durationOfdelivery:47,
              RestaurantreviewValue:4.1,

        },
        {
            _id:"12356",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/4/94834/9d8fd8316f17c4251c9fe6c35369552f_o2_featured_v2.jpg?output-format=webp",
              ],
              name:"Baba Bakery",
              cuisine:["Bakery, North Indian"],
              aveargeCost:100,
              isPro:true,
              isOff:80,
              durationOfdelivery:47,
              RestaurantreviewValue:4.1,

        },
        {
            _id:"12356",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/4/94834/9d8fd8316f17c4251c9fe6c35369552f_o2_featured_v2.jpg?output-format=webp",
              ],
              name:"Baba Bakery",
              cuisine:["Bakery, North Indian"],
              aveargeCost:100,
              isPro:true,
              isOff:80,
              durationOfdelivery:47,
              RestaurantreviewValue:4.1,

        },
    ]);
return<>
<DeliveryCarousal/>
<div className="flex justify-between flex-wrap ">
    {restaurantList.map((restaurant)=>
    (
        <RestaurantCard{...restaurant} key={restaurant._id}/>
    ))}

</div>


</>
}
export default Delivery;