
import "./MainScreen.css"
import {Card} from "../components/Card"
//let testItem = new itemProfile("doe", "jane", "hello@email", "itemname");



export default function MainScreen(){
    return(
        <div className = "MainScreen">
            <Card imgSrc = "https://picsum.photos/id/237/200/300" 
            imgAlt = "Selling" title = "Items for Sale" 
            description = "beautiful dog looking to be adopted. Not much to look for aside from here, brand new, 11 years old."/>
        </div>

    )
}