import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
const ReviewCard=()=>
{
    return(
        <>
        <div className="my-3 flex flex-col  gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full">
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/1b9/7471d62e8553e2251e3cbe873551d1b9.jpg"
                    alt="avathar"
                    className="w-full h-full rounded-full object-cover" />

                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">Enugu Mounika</h3>
                    <small>5 Reviews &#8226; 3Followers</small>

                </div>
                </div>
                <button className="text-zomato-400 py-2 px-4 rounded-lg border border-zomato-400">Follow</button>
      
            </div>
        <div className="flex flex-col  gap-3">
            <div className="flex items-center gap-3">
                <span className="text-white  text-xs bg-green-700 rounded-lg flex
                items-center px-2 py-1">
                    3<TiStarFullOutline/>
                     </span>
                     <h5 className="font-regular uppercase">Delivery</h5>
                   
                    <small className="text-gray-500">3 days ago</small> 
            </div>
            <div className="w-full ">
                <p className="w-full text-grey-600 font-light text-base">
                not satisfied with food and chicken is raw not good food.
                not satisfied with food and chicken is raw not good food
                not satisfied with food and chicken is raw not good food
                    </p>
            </div>
        </div>
        </div>
        </>

    )
}
export default ReviewCard;