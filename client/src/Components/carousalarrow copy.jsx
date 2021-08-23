import React from "react";
 export const NextArrow =(props)=>
{
    return(
    <div className={props.className}
    style={{...props.style,backgroundColor:"#e23744"}}
    onClick={props.onClick}
    />
    );
};
export const PreviousArrow =(props)=>
{
    return(
    <div className={props.className}
    style={{...props.style,backgroundColor:"#e23744"}}
    onClick={props.onClick}
    />
    );
};
