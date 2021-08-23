/*import React from "react"
import { IoMdArrowDropright } from "react-icons/io";
const PictureCarousalCard=()=>
{
    return(<>
    <div className="w-full h-20">
        <img src="https://b.zmtcdn.com/data/pictures/7/18558347/ed10399bc08cc5d1b4f9a59195eac157.jpg?output-format=webp"
        alt="food"
        className="w-full h-full"/>
    </div>
    <div>
        <h4>Onam Special</h4>
        <h6>15 places<IoMdArrowDropright/></h6>
    </div>
    </>
    );



};
export default PictureCarousalCard;*/


import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Onam Special</h4>
          <h6 className="z-10 flex items-center">
            15 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarousalCard;