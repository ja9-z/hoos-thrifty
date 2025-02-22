//import Header from "../components/Header"
import {useNavigate} from "react-router-dom"

export default function Welcome(){
    const nagivate = useNavigate()
    return(
        <div class = 'welcome'
        style = {{
            margin: "auto",
            width: 1000,
            
        }}
        >
            <h1
                style = {{
                    textAlign: "center",
                    marginTop:250,
                    marginBottom: 225,
                    fontSize: 125,
                    fontFamily: "Playfair Display"
                    

                }}
            >HOOS THRIFTY</h1>
            <div class = "button-container"
                style = {{
                    display: "flex"
                }}
            >
                <button
                onClick = {() => nagivate("seller")}
                style = {{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop:-100,
                    fontSize: 40,
                    fontFamily: "Playfair Display",
                    borderRadius: 35
                }
                }
            >
                Sell something! </button>
                <button 
                onClick={() => nagivate("main")}
                style = {{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop:-100,
                    fontSize: 40,
                    fontFamily: "Playfair Display",
                    borderRadius: 35
                }
                }
            > 
                Get started! </button>
            </div>
        </div>
    )
}