import React, { useState } from "react";
import "./home.css";

const Home = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const [angle, setAngle] = useState(180);
  
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
  
      const offsetX = (clientX - centerX) / 35;  
      const offsetY = (clientY - centerY) / 35;  
  
      setEyePosition({ x: offsetX, y: offsetY });
  
      const newAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
      setAngle(newAngle);
    };

    return (
        <section id="home" onMouseMove={handleMouseMove}>     
            <div className="background-container" onMouseMove={handleMouseMove}>
                <div
                    className="stylish-text"
                    style={{
                    "--dynamic-angle": `${angle}deg`,
                    }}
                >
                    <span className="text-mask">DOMÊNICO</span>
                </div>
            </div>
        </section>
    );
};

export default Home;
