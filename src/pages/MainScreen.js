
import "./MainScreen.css"
import {Card} from "../components/Card"
//let testItem = new itemProfile("doe", "jane", "hello@email", "itemname");

const imgSrc_c = "https://picsum.photos/id/237/200/300";
const imgAlt_c = "Selling";
const title_c = "Items for Sale";
const desc_c = "beautiful dog looking to be adopted. Not much to look for aside from here, brand new, 11 years old.";

export default function MainScreen(){
    return(
        <div className = "MainScreen">
            <div className = "subScreen2">
                <div>
                    <button className = "buttonStyle">❌</button>
                </div>
                <div className = "MainScreen">
                    <div>
                        <h1 style = {{
                            textAlign: "center",
                            fontSize: 50,
                            fontFamily: "Playfair Display"
                        }}>meet your match!💞</h1>
                    </div>
                    <div className = "subScreen">
                        <Card imgSrc = {imgSrc_c}
                        imgAlt = {imgAlt_c} title = {title_c}
                        description = {desc_c}/>
                    </div>
                </div>
                <div>
                    <button className = "buttonStyle">✔</button>
                </div>
            </div>
        </div>
    )
}