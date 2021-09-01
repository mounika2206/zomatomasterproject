import React from "react";
const MenuCollection=(props)=>
{
    return(
        <>
        <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col  ">
        <div className="w-24 h-24 overflow-hidden rounded ">
           <img src={props.image} alt="menu" className="w-full rounded-lg h-full transform transition duration-400 hover:scale-110"/> 
        </div>
           <strong>{props.menutitle}</strong>
           <p>{props.pages}Pages</p>
        </div>

        </>
    );
};
export default MenuCollection;