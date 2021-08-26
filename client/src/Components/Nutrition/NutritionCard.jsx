import React from "react";
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
const NutritionCard=(props)=>
{
    return(
        <div className="p-3  md:w-1/2 lg:w-1/3 ">
            <div className="w-full h-full bg-white rounded-2xl  shadow-lg">
            <div className={`w-full p-4 h-56  rounded-t-2xl bg-${props.bg}-100`}>
                <img src={props.image}
                className="w-full h-full"/>
                </div>
                <div className="p-3  flex flex-col gap-3">
                    <div className=" flex mt-2 items-center gap-3">
                    <div className="w-4 h-4 ">
                <img className="w-full h-full"
                src="https://clipground.com/images/non-veg-symbol-png-3.jpg"/>
                </div>
                <ReactStars
                count={5}
                //onChange={ratingChanged}
                size={24}
                isHalf={true}
                value={3}
                emptyIcon={<BsStar/>}
                halfIcon={<BsStarHalf/>}
                fullIcon={<BsStarFill/>}
                activeColor="#ffd700"
                />
               <span className="text-gray-400">15 </span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 ">Burn-Weight balance</h3>
                <p className="text-sm font-light text-gray-400">
                    This is formula  to reduce weight.
                    This is formula  to reduce weight.
                </p>
                <div className="mt-4">
                    <hr/>
                </div>
                <div>
                    <span>
                    <s className="text-gray-300 font-light mr-3">
                    ₹600</s>{" "}
                        <strong>320</strong>
                        </span>
                        <p>Monthly pack-30 capsules</p>
                </div>
                </div>
                </div>

                </div>
             
    );

};
export default NutritionCard;