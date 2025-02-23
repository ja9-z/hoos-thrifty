import "./SellerScreen.css"
import "./Prompts.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerScreen() {
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
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <div
        style={{
            width: "300px", // Set the box width
            height: "300px", // Set the box height
            border: "2px dashed #ccc", // Add a dashed border to the box
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",  
        }}
      >
        {!image && <span>Upload an image</span>} {/* Placeholder text */}
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

export default SellerScreen