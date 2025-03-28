import React, { useState } from 'react';
import './principal.css';
import Home from './sections/Home/Home';

const Principal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorWhere, setCursorWhere] = useState(false);
    
    const clickTag = (e) => {      
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        setCursorPosition({ x: posX, y: posY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);

      const wheresMouse = (wheres) => {
        setCursorWhere(wheres);
      }


  return (
    <main onScroll={ clickTag } id="main">
        <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-dot"></div>
        <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className={`cursor-outline ${cursorWhere ? 'cursor-in' : ''}`}></div>
        <Home />
    </main>
  );
};

export default Principal;
