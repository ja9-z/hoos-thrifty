import React from "react";
import "./Card.css"
export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description
}) =>{
    return(
        <div className = "cardContainer">
            <img src ={imgSrc} alt = {imgAlt} className = "cardImg"/>
            
            <h2 className = "cardTitle">{title}</h2>
            <p className = "cardDesc">{description}</p>
            
        </div>
    );
};