import React from "react";
import "./Prompts.css"
import { useNavigate } from "react-router-dom";

export default function Prompts(){
    const navigate = useNavigate();
    return (
        <div class = "main-container">
            <h1 class = "header">one last step...</h1>
        <div class = "form">
            <h1 class = "formHeader">finish these sentences to find the one 😉</h1>
            <form>
                <label class = "question1Label">together we could...</label>
                <textarea class = "question1"
                    required
                >
                </textarea>
                <label class = "question2Label">together could take me home if you...</label>
                <textarea class ="question2"
                    required
                >
                </textarea>
                <label class = "question3Label">some of my imperfections are...</label>
                <textarea class ="question3"
                    required
                >
                </textarea>

                <button class = 'loveButton'
                        onClick={() => navigate("/welcome")}
                >💌</button>
            </form>
        </div>
        </div>
    )
}