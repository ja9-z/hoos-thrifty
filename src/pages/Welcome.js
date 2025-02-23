import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image.png";
import image2 from "../assets/image2.png";
import explain from "../assets/Explain1.png";


import { motion, useScroll, useTransform } from 'framer-motion'; // Import Framer Motion
import './Welcome.css';
import transition from '../components/Transition';

const Welcome =()=> {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll(); // Get scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [0, -2000]); // Adjust translation for scroll

    return (
        
        <><div
            className="welcome"
            style={{
                margin: "auto",
                width: "100%",
                minHeight: "200vh", // Increase height to ensure scrollable space
                backgroundColor: "#FFFDF7",
                paddingBottom: "200vh",
            }}>  
            <motion.h1
                style={{
                    textAlign: "center",
                    marginTop: 200,
                    marginBottom: 225,
                    fontSize: 150,
                    fontFamily: "Playfair Display",
                    fontWeight: "normal",
                    position: "relative",
                }}

                initial={{backgroundColor:"#FFFDF7" ,color: "#000000"}}
                animate={{backgroundColor: ["#FFFDF7","#000000"],
                        color: ["#000000","#FFFFFF"]
                }}
                transition = {{delay: 1,duration: 0.3, repeat:1, repeatType: "reverse", repeatDelay: 4}}
            >
                HOOS THRIFTY
            </motion.h1>
           

            {/* Wrap image with Framer Motion's motion.img */}
            <div className="image-container">
                <motion.img
                    src={image1}
                    className="animated-image"
                    alt="image.png"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{
                        width: '1500px',
                        height: 'auto',
                        margin: '0 10px',
                        y, // Apply the scroll-based translation
                        position: 'relative',
                        top: '-550px',
                    }} />
            </div>

            <div className="image-container2">
                <motion.img
                    src={image2}
                    className="animated-image2"
                    alt="image2.png"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{
                        width: '1500px',
                        position: 'absolute',
                        y, // Apply the scroll-based translation
                        top: '160%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }} />
            </div>

            <div className="button-container" style={{ display: "flex" }}>
                <motion.button
                    onClick={() => navigate("/seller")}
                    initial={{ opacity: 0 }}
                    whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
                    whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: -100,
                        fontSize: 40,
                        fontFamily: "Playfair Display",
                        borderRadius: 35,
                        position: "relative",
                        top: -650,
                        left: 250,
                    }}
                >

                    sell something💸
                </motion.button>
                <motion.button
                    onClick={() => navigate("/main")}
                    initial={{ opacity: 0 }}
                    whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
                    whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: -100,
                        fontSize: 40,
                        fontFamily: "Playfair Display",
                        borderRadius: 35,
                        position: "relative",
                        top: -650,
                        left: -200,
                    }}
                >
                    get started🩷
                </motion.button>

            </div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginTop: -260,
                        left: -200,
                        marginBottom: 225,
                        fontSize: 60,
                        fontFamily: "Montserrat",
                        fontWeight: "normal",
                        position: "relative",
                    }}
                >
                    cat break your favorite mug? ☕<br />
                    in need of a new cup...and rug?
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 1 }}
            >
                <h2
                    style={{
                        textAlign: "right",
                        marginTop: 180,
                        left: -200,
                        marginBottom: 225,
                        fontSize: 60,
                        fontFamily: "Montserrat",
                        fontWeight: "normal",
                        position: "relative",
                    }}
                >
                    new to the city? 🏙️<br />
                    in need of new furniture?
                </h2>
            </motion.div>
        </div>
        <div className="image-containerExplain1">
                <motion.img
                    src={explain}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="animated-imageExplain1"
                    alt="Explain1.png" 
                    style={{
                        width: '1400px',
                        position: 'relative',
                         // Apply the scroll-based translation
                        top: -1600,
                        left: 760,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }} />
    </div></>
        
    );
    
}

export default transition(Welcome);