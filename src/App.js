import "./App.css";
import { motion ,useAnimation } from "framer-motion";
import React from "react";

function App() {
  const controls = useAnimation();
  return (
    <div>
      <motion.div
        className="box"
        drag="x"
        whileTap={{
          rotate: -360,
        }}
        initial={{
          rotate: 0,
        }}
        animate={controls}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        
      />
      <hr className="road" />

      <br />
      <div className="pane">
        <button className="button" onClick={() => controls.start({
             x: 300,
          rotate: 360,
          transition: { 
            type: "spring",
            velocity: 0,
            bounce: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            
          },  

        })}>Start</button>
        <button className="button" onClick={() => controls.stop(  
        )}>Stop</button>


      </div>
    </div>
  );
}

export default App;
