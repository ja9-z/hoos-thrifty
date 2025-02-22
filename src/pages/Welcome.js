import Header from "../components/Header"
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
                    fontSize: 120,
                    

                }}
            >HOOS THRIFTY</h1>
            <button 
                onClick={() => nagivate("main")}
                style = {{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 40,
                    marginBottom: "auto"
                }
                }
            > 
            Get started 💖 </button>
        </div>
    )
}