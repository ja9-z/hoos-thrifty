
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
    duration: 0.6,
    ease: "easeOut"
    
}

const transition2 = {
    duration:0.6,
    delay: 0.5,
    ease: "easeIn",
}

let currCard = 1;

const handle_click = ()=>{
    if (currCard == 1){
        currCard++;
        animate(".subScreen",{
            opacity: 0,
            rotate: [0,10],
            x: [0,40],
            y: [0,50],
        
        }, transition)

        animate(".subScreenAlt",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,60],
        }, transition2)
    }

    else if(currCard == 2){
        //console.log("clicked");
        currCard++
        animate(".subScreenAlt",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
        animate(".subScreenAlt2",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,60],
        }, transition2)
        
    }
    else if(currCard == 3){
        currCard++
        animate(".subScreenAlt2",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
        animate(".subScreenAlt3",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,60],
        }, transition2)
        
    }
    else if(currCard == 4){
        currCard = 1;
        animate(".subScreenAlt3",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
        animate(".subScreen",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }


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
                    <motion.div className = "subScreenAlt3">
                        <Card imgSrc = {imgSrc_c}
                        imgAlt = {imgAlt_c} title = {title_c}
                        description = "next next next card"/>
                    </motion.div>
                    <motion.div className = "subScreenAlt2">
                        <Card imgSrc = {imgSrc_c}
                        imgAlt = {imgAlt_c} title = {title_c}
                        description = "next next card"/>
                    </motion.div>
                    <motion.div className = "subScreenAlt">
                        <Card imgSrc = {imgSrc_c}
                        imgAlt = {imgAlt_c} title = {title_c}
                        description = "next card"/>
                    </motion.div>
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