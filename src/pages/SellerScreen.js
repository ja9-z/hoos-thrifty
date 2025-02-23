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
        <div name = "picContainer">
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
        {!image && <span
            style={{
                fontSize: "24px", // Increase the font size here
                color: "#888", // You can change the color if needed
                textAlign: "center", // Ensure the text is centered
            }}
        >Upload an image</span>} {/* Placeholder text */}
        </div>
        <input type="file" onChange={handleImageChange} accept="image/*" 
            style = {{
                marginLeft:175,
                padding: 10,
                fontSize: 16,
                fontFamily: "Playfair Display",
                cursor: "pointer",
                border: 1,
                borderRadius:5,
                color:"#888",
            }}/> 
        </div>
        </div>
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
                <label class = "question2Label">you could take me home if you...</label>
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
    </div>

    //da goods for the prompt
    
);
}

export default transition(SellerScreen);