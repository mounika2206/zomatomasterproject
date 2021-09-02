import React from "react";
import {TiStar} from "react-icons/ti";
const MenuCollectionCard=(props)=>
{
    
        return(
            <>
            <div className="mx-2 gap-3" >
                
            <div className="bg-white shadow rounded-md w-24 md:w-64  ">
                <div className="w-full  h-48">
                    <img src={props.image}
                    alt="food"
                    className="w-full h-full object-cover rounded-md shadow-lg"/>
                </div>
                <div className="flex flex-col gap-2 p-3">
                    <h3 className="text-lg my-1 font-medium">{props.title}</h3>
                <div className="flex items-center justify-between text-sm ">
                    <span className="flex items-center gap-1 border-r-1 pr-2 border-gray-500">
                    
                        <span className="flex items-center px-2  py-1 gap-1 bg-green-700 text-white p-1 rounded">
                            30<TiStar/>
                        </span>
                        Dining
                        </span>
                        <span className="w-2 h-6 border-r border-gray-500"/>
                        <span className="flex items-center gap-1 border-r-1 pr-2 border-gray-500">
                    
                    <span className="flex items-center gap-1 bg-green-700 text-white p-1 rounded">
                        30<TiStar/>
                    </span>
                    Dining
                    </span>
                        
                </div>
            
               <h4>Street Food,Beverages,Tea</h4>
                </div>
            </div>
            
            </div>
            </>
    );

};
export default MenuCollectionCard;
