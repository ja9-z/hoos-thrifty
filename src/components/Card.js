import React from "react";
import "./Card.css"
export const Card = () =>{
    return(
        <div className = "cardContainer">
            <img src ="https://picsum.photos/id/26/300/200" alt = "Card Image" className = "cardImg"/>
            <h2 className = "cardTitle">Card Title</h2>
            <p className = "cardDesc">description...</p>
        </div>
    );
};