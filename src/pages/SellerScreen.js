import "./SellerScreen.css"
import React, { useState } from "react";

function SellerScreen() {
  const [image, setImage] = useState(null); // Store the image URL

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
    <div>
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
    </div>
  );
}

export default SellerScreen