const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Define the itemProfile class
class itemProfile {
    constructor(lastName, firstName, email, itemName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.itemName = itemName;
        this.itemTags = [];
        this.itemAnswers = ["", "", "", "", "", ""];
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    addTags(tag) {
        if (this.itemTags.length < 10 && !this.itemTags.includes(tag.toLowerCase())) {
            this.itemTags.push(tag.toLowerCase());
        }
    }

    removeTag(tag) {
        const idx = this.itemTags.indexOf(tag);
        if (idx !== -1) this.itemTags.splice(idx, 1);
    }
}

// Store itemProfiles in an array
let profiles = [
    new itemProfile("Doe", "John", "john@example.com", "Wooden Chair"),
];

// WebSocket logic
io.on("connection", (socket) => {
    console.log("A user connected");

    // Send existing profiles to the new client
    socket.emit("profiles", profiles);

    // Listen for a new profile
    socket.on("addProfile", (profileData) => {
        const newProfile = new itemProfile(
            profileData.lastName,
            profileData.firstName,
            profileData.email,
            profileData.itemName
        );
        profiles.push(newProfile);
        io.emit("profiles", profiles); // Broadcast updated list
    });

    // Listen for a tag addition
    socket.on("addTag", ({ email, tag }) => {
        const profile = profiles.find((p) => p.email === email);
        if (profile) {
            profile.addTags(tag);
            io.emit("profiles", profiles); // Broadcast update
        }
    });

    // Listen for a tag removal
    socket.on("removeTag", ({ email, tag }) => {
        const profile = profiles.find((p) => p.email === email);
        if (profile) {
            profile.removeTag(tag);
            io.emit("profiles", profiles); // Broadcast update
        }
    });

    socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(4000, () => console.log("Server running on port 4000"));
