import React, { useState } from 'react';
import Initial from "../sections/Initial/Initial";
import "./home.css";
import Header from '../components/header/Header';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorWhere, setCursorWhere] = useState(false);


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
        <main id='main'>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className="cursor-dot"></div>
            <div style={{left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`}} className={`cursor-outline ${cursorWhere ? 'cursor-in' : ''}`}></div>
            <Header />
            <Initial />
            <About />
            <Skills />
            <Contact />
        </main>
    );
}

export default Home;