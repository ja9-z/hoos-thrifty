import "./SellerScreen.css"
import "./Prompts.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import transition from "../components/Transition";
import {motion} from "framer-motion"

const SellerScreen =() =>{
  const [image, setImage] = useState(null); // Store the image URL
const navigate = useNavigate();
const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
        setImage(reader.result); // Set the image URL in the state
    };
      reader.readAsDataURL(file); // Convert image to base64 URL
    }
};

return (
    <div class = "container">
        <div className = " imageContainer">
        <motion.button 
            onClick={() => navigate("/welcome")}
            style={{
                position: "sticky",
                display: "flexbox",
                alignContent: "end",
                justifyContent: "flex-end",
                top: "10px",
                right: "50px",
                margin: "0px 50px 20px 0px",
                fontSize: 36,
                fontFamily: "Playfair Display",
                border:"none",
                outline: "none",
                padding: "10px 0px 0px 30px",
                backgroundColor:  'rgba(52, 52, 52, 0)',
                zIndex: 5,
            }}
            >
                home
            </motion.button>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <div
        style={{
            width: "500px", // Set the box width
            height: "500px", // Set the box height
            border: "2px dashed #ccc", // Add a dashed border to the box
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            boxShadow: image ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
            backgroundPosition: "center", 
            margin: "50px 50px",
            top: "50px",
        }}
        >
        {!image && <span>Upload an image</span>} {/* Placeholder text */}
        </div>
        </div>
        <div class = "main-container">
            <h1 class = "header">One last step...</h1>
        <div class = "form">
            <h1 class = "formHeader">Finish these sentences to find the one 😉</h1>
            <form>
                <label class = "question1Label">Q1. Together we could...</label>
                <textarea class = "question1"
                    required
                >
                </textarea>
                <label class = "question2Label">Q2. You could take me home if you...</label>
                <textarea class ="question2"
                    required
                >
                </textarea>
                <label class = "question3Label">Q3. Some of my imperfections are...</label>
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
    </div>

    //da goods for the prompt
    
);
}

export default transition(SellerScreen);