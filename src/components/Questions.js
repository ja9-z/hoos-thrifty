import React from "react";
import "./Questions.css"
export const Question = ({
    question,
    answer
}) =>{
    return(
        <div className = "questionContainer">
            
            <h2 className = "question">{question}</h2>
            <p className = "answer">{answer}</p>
            
        </div>
    );
};