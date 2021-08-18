import joi from "joi";
export const ValidateRestaurantId=(restaurantObj)=>
{
 const Schema=joi.object({
    
    city:joi.string().required(),
    
}); 
return Schema.validateAsync(restaurantObj);
};
export const ValidateSearchstring=(restaurantObj)=>
{
 const Schema=joi.object({
    
    city:joi.string().required(),
    
}); 
return Schema.validateAsync(restaurantObj);
};
export const ValidateRestaurantCity=(restaurantObj)=>
{
 const Schema=joi.object({
    
    city:joi.string().required(),
    
}); 
return Schema.validateAsync(restaurantObj);
};

