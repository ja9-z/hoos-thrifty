
import "./MainScreen.css"
import {motion} from "framer-motion"
import {animate} from "framer-motion"
import {Card} from "../components/Card"
import {Question} from "../components/Questions"
import imgSrcX from '../assets/X.png';
import imgSrcCheck from '../assets/Check.png';
import imgSrcback from '../assets/Back.png';
import imgSrcEasel from '../assets/Easel.png';
import imgSrcCamera from '../assets/Camera.png';
import imgSrcJacket from '../assets/Jacket.png';
import imgSrcCup from '../assets/Cup.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import transition from '../components/Transition';

let imgSrc_a = imgSrcEasel;
let imgSrc_b = imgSrcCamera;
let imgSrc_c = imgSrcJacket;
let imgSrc_d = imgSrcCup;
let imgAlt_c = "Selling";
let title_a = "Easel   |   $60";
let title_b = "NIKON Camera   |   $110";
let title_c = "Leather Jacket   |   $20";
let title_d = "Glass Coffee Cup   |   $6";
let desc_a = "Lightly used Easel, perfect for painting! It can hold up to 20 lbs and is 5 ft tall.";
let desc_b = "NIKON D3100 Camera, comes with a 18-55mm lens. Extremely good quality. Comes with a neck strap and lense cap, does NOT come with a camera bag.";
let desc_c = "Berksha Woman's leather jacket in size small. Slightly stiff, but will break in with wear. Wash inside out and hang dry.";
let desc_d = "Heavy duty glass coffee cup. Withstands high temperatures and is dishwasher safe. Pretty thick glass, which also makes it a bit heavy";




const transition1 = {
    duration: 0.6,
    ease: "easeOut"
    
}

const transition2 = {
    duration:0.6,
    delay: 0.5,
    ease: "easeIn",
}

let currCard = 1;

const handle_x_click = ()=>{
    if (currCard === 1){
        currCard++;
        animate(".subScreen1",{
            opacity: 0,
            rotate: [0,10],
            x: [0,40],
            y: [0,50],
        
        }, transition1)

        animate(".subScreen2",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
    }

    else if(currCard === 2){
        //console.log("clicked");
        currCard++
        animate(".subScreen2",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition1)
        animate(".subScreen3",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }
    else if(currCard === 3){
        currCard++
        animate(".subScreen3",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition1)
        animate(".subScreen4",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }
    else if(currCard === 4){
        currCard = 1;
        animate(".subScreen4",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition1)
        animate(".subScreen1",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }


}

const checkTransition1 = {
    duration:0.4,
    ease: "easeOut",
}

const handle_check_click = ()=>{
    animate(".buttonStyle",{
        opacity: 0
    })
    animate(".heading",{
        opacity: 0
    })
    animate(".buttonStyleAlt",{
        opacity: 100,
        x: 200,
    })
    animate(".headingAlt",{
        y: [-10, 0],
        opacity: 100,
    },{ delay: 0.2})
    if(currCard === 1){
        animate(".subScreen1",{
            x: -300,
            y: -10,
        },checkTransition1)
        animate(".ItemInfo1",{
            x: [500, 250],
            opacity: 100,
        }, checkTransition1)
        
    }
    else if(currCard === 2){
        animate(".subScreen2",{
            x: -300,
            y: -10,
        },checkTransition1)
        animate(".ItemInfo2",{
            x: [500, 250],
            opacity: 100,
        }, checkTransition1)
        
    }
    else if(currCard === 3){
        animate(".subScreen3",{
            x: -300,
            y: -10,
        },checkTransition1)
        animate(".ItemInfo3",{
            x: [500, 250],
            opacity: 100,
        }, checkTransition1)
        
    }
    else if(currCard === 4){
        animate(".subScreen4",{
            x: -300,
            y: -10,
        },checkTransition1)
        animate(".ItemInfo4",{
            x: [500, 250],
            opacity: 100,
        }, checkTransition1)
        
    }
}

const checkTransition2 = {
    duration:0.4,
    ease: "easeIn",
}

const handle_back_click=()=>{
    animate(".buttonStyle",{
        opacity: 100
    },{
        delay: 0.3,
    })
    animate(".heading",{
        opacity: 100
    },{ delay: 0.2})
    animate(".buttonStyleAlt",{
        opacity: 0,
        x: [200,150],
    })
    animate(".headingAlt",{
        y: [0, -10],
        opacity: 0,
    })
    if(currCard === 1){
        animate(".subScreen1",{
            x: [-300, 0],
            y: [-10, 0],
        },checkTransition2)
        animate(".ItemInfo1",{
            x: [250, 500],
            opacity: 0,
        }, checkTransition2)
        
    }
    else if(currCard === 2){
        animate(".subScreen2",{
            x: [-300, 0],
            y: [-10, 0],
        },checkTransition2)
        animate(".ItemInfo2",{
            x: [250, 500],
            opacity: 0,
        }, checkTransition2)
        
    }
    else if(currCard === 3){
        animate(".subScreen3",{
            x: [-300, 0],
            y: [-10, 0],
        },checkTransition2)
        animate(".ItemInfo3",{
            x: [250, 500],
            opacity: 0,
        }, checkTransition2)
        
    }
    else if(currCard === 4){
        animate(".subScreen4",{
            x: [-300, 0],
            y: [-10, 0],
        },checkTransition2)
        animate(".ItemInfo4",{
            x: [250, 500],
            opacity: 0,
        }, checkTransition2)
        
    }
}



const MainScreen = ()=>{
    useEffect(() => {
        console.log("MainScreen Mounted");
        return () => {
            console.log("MainScreen Unmounted"); // This should log when you navigate away
        };
    }, []);
    const navigate = useNavigate();
    return(
        <div>
            <motion.button 
            onClick={() => navigate("/welcome")}
            style={{
                position: "sticky",
                display: "flexbox",
                alignContent: "end",
                justifyContent: "flex-end",
                top: "10px",
                right: "50px",
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
        <div className = "MainScreen">
            
            <div className = "heading">
                <h1 style = {{
                    textAlign: "center",
                    fontSize: 50,
                    fontFamily: "Playfair Display"
                }}>meet your match!💞</h1>
            </div>
            <div className = "headingAlt">
                <h1 style = {{
                    textAlign: "center",
                    fontSize: 50,
                    fontFamily: "Playfair Display"
                }}>it's a match...!</h1>
            </div>
            <div className = "subScreenAlt">
                <motion.div>
                    <button className = "buttonStyle" onClick = {handle_x_click}>
                        <img src={imgSrcX} alt="X" className="X" />
                    </button>
                </motion.div>
                    
                        <motion.div whileHover={{y: -5}}>
                            <motion.div className = "subScreen4">
                                <Card imgSrc = {imgSrc_d}
                                imgAlt = {imgAlt_c} title = {title_d}
                                description = {desc_d}/>
                            </motion.div>
                            <motion.div className = "subScreen3">
                                <Card imgSrc = {imgSrc_c}
                                imgAlt = {imgAlt_c} title = {title_c}
                                description = {desc_c}/>
                            </motion.div>
                            <motion.div className = "subScreen2">
                                <Card imgSrc = {imgSrc_b}
                                imgAlt = {imgAlt_c} title = {title_b}
                                description = {desc_b}/>
                            </motion.div>
                            <motion.div className = "subScreen1">
                                <Card imgSrc = {imgSrc_a}
                                imgAlt = {imgAlt_c} title = {title_a}
                                description = {desc_a}/>
                            </motion.div>
                        </motion.div>
                <motion.div>
                    <button className = "buttonStyle" onClick = {handle_check_click}>
                        <img src={imgSrcCheck} alt="Check" className="Check" />
                    </button>
                </motion.div>
                    
                </div>

                <motion.div className = "ItemInfo1">
                    <Question question = "together we could..." answer = "spend an evening painting together <3"/>
                    <Question question = "you should take me home if you..." answer = "also love da vinci"/>
                    <Question question = "an imperfection of mine is..." answer = "I can be pretty unstable under a lot of pressure..."/>
                    <Question question = "like me? reach out!" answer = {<span>Seller Name: Janine Zheng<br />Email: janinezheng@gmail.com<br />Venmo: @jz12345</span>} />
                </motion.div>
                <motion.div className = "ItemInfo2">
                    <Question question = "together we could..." answer = "make memories that will last forever"/>
                    <Question question = "you should take me home if you..." answer = "want to capture moments to look back on"/>
                    <Question question = "an imperfection of mine is..." answer = "i'm a bit of an introvert...my battery when working depletes rather quickly"/>
                    <Question question = "like me? reach out!" answer = {<span>Seller Name: Hailey Chong<br />Email: haileychong@gmail.com<br />Venmo: @hc12345</span>} />
                </motion.div>
                <motion.div className = "ItemInfo3">
                    <Question question = "together we could..." answer = "have a fun night out together ;)"/>
                    <Question question = "you should take me home if you..." answer = "need an extra pop to your outfits"/>
                    <Question question = "an imperfection of mine is..." answer = "my inner left pocket is slightly ripped (but I'm in overall good health)."/>
                    <Question question = "like me? reach out!" answer = {<span>Seller Name: Annie Bai<br />Email: anniebai@gmail.com<br />Venmo: @ab12345</span>} />
                </motion.div>
                <motion.div className = "ItemInfo4">
                    <Question question = "together we could..." answer = "have a coffee date"/>
                    <Question question = "you should take me home if you..." answer = "have cats that like pushing things off counters"/>
                    <Question question = "an imperfection of mine is..." answer = "i'm an armworkout to hold sometimes (but that's bc i'm so durable)"/>
                    <Question question = "like me? reach out!" answer = {<span>Banine Beng <br />Email: baninebeng@gmail.com<br />Venmo: @bb12345</span>} />
                </motion.div>
                <motion.div>
                    <button className = "buttonStyleAlt" onClick = {handle_back_click}>
                        <img src={imgSrcback} alt="Back" className="Back" />
                    </button>
                </motion.div>
            </div>
            </div>
    )
}

export default transition(MainScreen);