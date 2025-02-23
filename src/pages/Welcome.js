import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image.png";
import { motion, useScroll, useTransform } from 'framer-motion'; // Import Framer Motion
import './Welcome.css';

export default function Welcome() {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll(); // Get scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [0, -2000]); // Adjust translation for scroll

    return (
        <div
            className="welcome"
            style={{
                margin: "auto",
                width: "100%",
                minHeight: "200vh", // Increase height to ensure scrollable space
                backgroundColor: "#FFFDF7",
                paddingBottom: "200vh",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginTop: 200,
                    marginBottom: 225,
                    fontSize: 150,
                    fontFamily: "Playfair Display",
                    fontWeight: "normal",
                    position: "relative",
                }}
            >
                HOOS THRIFTY
            </h1>

            {/* Wrap image with Framer Motion's motion.img */}
            <div className="image-container">
                <motion.img
                    src={image1}
                    className="animated-image"
                    alt="image.png"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{
                        width: '1500px',
                        height: 'auto',
                        margin: '0 10px',
                        y, // Apply the scroll-based translation
                        position: 'relative',
                        top: '-580px',
                    }}
                />
            </div>

            <div className="button-container" style={{ display: "flex" }}>
                <button
                    onClick={() => navigate("seller")}
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: -100,
                        fontSize: 40,
                        fontFamily: "Playfair Display",
                        borderRadius: 35,
                    }}
                >
                    sell something💸
                </button>
                <button
                    onClick={() => navigate("main")}
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: -100,
                        fontSize: 40,
                        fontFamily: "Playfair Display",
                        borderRadius: 35,
                    }}
                >
                    get started🩷
                </button>
            </div>
        </div>
    );
}
