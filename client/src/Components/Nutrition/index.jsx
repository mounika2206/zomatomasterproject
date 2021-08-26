import React from "react";
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousal from "./NutritionCarousal";
import NutritionCard from "./NutritionCard";
const Nutrition=()=>
{
    return<div>
     <NutritionHeroCarousel/>
     <div className="my-6">
     <NutritionCarousal/>
     </div>
     <div className="flex justify-between flex-wrap">
     <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
    <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
     <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
    <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
    <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
    <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
    <NutritionCard bg="red" 
    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp"/>
     </div>
     
    </div>;
};
export default Nutrition;