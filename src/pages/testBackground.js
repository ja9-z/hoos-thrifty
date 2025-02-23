
import { motion } from "framer-motion";

export default function testBackground() {
    return(
        <div>
            <motion.h1 
            initial ={{ color: "#333"}}
            animate={{color: ["#6a9bd1","#4c6ef5"]}}
            transition = {{duration: 2, repeat: Infinity}}>
                Hello
            </motion.h1>
            <h1>help</h1>
        </div>


    );
}
