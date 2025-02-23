
import "./MainScreen.css"
import {motion} from "framer-motion"
import {animate} from "framer-motion"
import {Card} from "../components/Card"


//let testItem = new itemProfile("doe", "jane", "hello@email", "itemname");

let imgSrc_c = "https://picsum.photos/id/237/200/300";
let imgAlt_c = "Selling";
let title_c = "Items for Sale";
let desc_c = "beautiful dog looking to be adopted. Not much to look for aside from here, brand new, 11 years old.";

const transition = {
    duration: 1.0,
    ease: ["easeOut", "easeIn"]
    
}

const transition2 = {
    duration:1.5,
    delay: 1.2,
    ease: [0, 0.71, 0.8, 1.01],
}


const handle_click = ()=>{
    animate(".subScreen",{
        opacity: [100, 50, 0, 0, 0, 0, 50, 100],
        rotate: [0, 5, 10, -10, -10, -10, -5, 0],
        x: [0, 20, 40, -40, -40, -40, -20, 0],
        y: [0, 20, 40, -40, -40, -40, -20, 0],
        
    }, transition)

}



export default function MainScreen(){
    return(
        <div className = "MainScreen">
            <div className = "subScreen2">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                    
                    <button className = "buttonStyle" onClick = {handle_click}>❌</button>
                </motion.div>
                <div className = "MainScreen">
                    <div>
                        <h1 style = {{
                            textAlign: "center",
                            fontSize: 50,
                            fontFamily: "Playfair Display"
                        }}>meet your match!💞</h1>
                    </div>
                    <motion.div className = "subScreen">
                        <Card imgSrc = {imgSrc_c}
                        imgAlt = {imgAlt_c} title = {title_c}
                        description = {desc_c}/>
                    </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                    <button className = "buttonStyle">✔</button>
                </motion.div>
            </div>
        </div>
    )
}