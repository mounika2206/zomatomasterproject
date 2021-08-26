import React from "react";
import { TiStarOutline } from "react-icons/ti";
import{RiDirectionLine,RiShareForwardLine} from "react-icons/ri";


import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import { BiBookmarkPlus } from "react-icons/bi";
const RestaurantLayout=()=>
{
    return(
        <>

        {" "}
        <RestaurantNavbar/>
    <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid images={[
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/dish_photos/9af/c707a776d34f79ce45e88156ee9959af.jpg?output-format=webp",

        ]} />
        <RestaurantInfo name="Hyderabad xpress"
        restaurantrating="3.5"
        deliveryrating="3.9"
        cuising="North India,Fast-Food"
        address="Hyderabad Bwarchi"
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
            </div>
            

        
   
    </>
    );
}
export default RestaurantLayout;