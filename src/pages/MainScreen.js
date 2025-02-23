
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

const handle_x_click = ()=>{
    if (currCard == 1){
        currCard++;
        animate(".subScreen1",{
            opacity: 0,
            rotate: [0,10],
            x: [0,40],
            y: [0,50],
        
        }, transition)

        animate(".subScreen2",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
    }

    else if(currCard == 2){
        //console.log("clicked");
        currCard++
        animate(".subScreen2",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
        animate(".subScreen3",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }
    else if(currCard == 3){
        currCard++
        animate(".subScreen3",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
        animate(".subScreen4",{
            opacity:[0,100],
            rotate:[-10,0],
            x:[-40, 0],
            y:[-50,0],
        }, transition2)
        
    }
    else if(currCard == 4){
        currCard = 1;
        animate(".subScreen4",{
            opacity: 0,
            rotate: [null,10],
            x: [0,40],
            y: 0,
        
        }, transition)
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
    if(currCard == 1){
        animate(".subScreen1",{
            x: -400,
        },checkTransition1)
    }
}



export default function MainScreen(){
    return(
        <div className = "MainScreen">
            
            <div className = "subScreenAlt">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                    <button className = "buttonStyle" onClick = {handle_x_click}>❌</button>
                </motion.div>
                <div className = "MainScreen">
                    <div className = "heading">
                        <h1 style = {{
                            textAlign: "center",
                            fontSize: 50,
                            fontFamily: "Playfair Display"
                        }}>meet your match!💞</h1>
                    </div>
                    <div className = "vertical">
                        <motion.div whileHover={{y: -5}}>
                            <motion.div className = "subScreen4">
                                <Card imgSrc = {imgSrc_c}
                                imgAlt = {imgAlt_c} title = {title_c}
                                description = "next next next card"/>
                            </motion.div>
                            <motion.div className = "subScreen3">
                                <Card imgSrc = {imgSrc_c}
                                imgAlt = {imgAlt_c} title = {title_c}
                                description = "next next card"/>
                            </motion.div>
                            <motion.div className = "subScreen2">
                                <Card imgSrc = {imgSrc_c}
                                imgAlt = {imgAlt_c} title = {title_c}
                                description = "next card"/>
                            </motion.div>
                            <motion.div className = "subScreen1">
                                <Card imgSrc = {imgSrc_c}
                                imgAlt = {imgAlt_c} title = {title_c}
                                description = {desc_c}/>
                            </motion.div>
                        </motion.div>
                        </div>
                    <motion.div className = "ItemInfo">
                    test
                    </motion.div>
                
                </div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                    <button className = "buttonStyle" onClick = {handle_check_click}>✔</button>
                </motion.div>
            </div>
        </div>
    )
}