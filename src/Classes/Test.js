import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const InfoComponent = () => {
    const [profiles, setProfiles] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        itemName: "",
        
    });
    const [tagInput, setTagInput] = useState("");

    // Fetch profiles when component mounts
    useEffect(() => {
        socket.on("profiles", (data) => {
            setProfiles(data);
        });

        return () => {
            socket.off("profiles");
        };
    }, []);

    // Handle input change for profile form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add new profile
    const addNewProfile = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.itemName) {
            alert("All fields are required!");
            return;
        }
        socket.emit("addProfile", formData);
        setFormData({ firstName: "", lastName: "", email: "", itemName: "" });
    };

    // Handle tag input change
    const handleTagChange = (e) => {
        setTagInput(e.target.value);
    };

    // Add tag to a profile
    const addTag = (email) => {
        if (!tagInput.trim()) return;
        socket.emit("addTag", { email, tag: tagInput.trim() });
        setTagInput(""); // Clear input field
    };

    // Remove a tag from a profile
    const removeTag = (email, tag) => {
        socket.emit("removeTag", { email, tag });
    };

    return (
        <div>
            <h2>Real-Time Item Profiles</h2>

            {/* Form to Add New Profile */}
            <form onSubmit={addNewProfile}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="itemName" placeholder="Item Name" value={formData.itemName} onChange={handleChange} required />
                <button type="submit">Add Profile</button>
            </form>

            {/* List of Profiles */}
            <div>
                {profiles.map((profile) => (
                    <li key={profile.email}>
                        <strong>{profile.firstName} {profile.lastName}</strong> - {profile.itemName} ({profile.email})
                        <div>
                            <strong>Tags:</strong> {profile.itemTags.length > 0 ? profile.itemTags.join(", ") : "No tags"}
                        </div>

                        {/* Tag Input for each profile */}
                        <input type="text" placeholder="Add tag" value={tagInput} onChange={handleTagChange} />
                        <button onClick={() => addTag(profile.email)}>+ Add Tag</button>

                        {/* Remove tag buttons */}
                        {profile.itemTags.map((tag) => (
                            <button key={tag} onClick={() => removeTag(profile.email, tag)}>- {tag}</button>
                        ))}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default InfoComponent;
