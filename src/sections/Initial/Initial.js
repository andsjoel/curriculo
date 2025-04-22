import React, { useEffect, useRef, useState } from "react";
import "./initial.css";
import Domenicozin from "../../assets/images/domenicozin.png";

const Initial = () => {
    const lettersRef = useRef([]);
    const imageRef = useRef(null);
    const sensitivityFactors = useRef([]);

    // const [scrollTop, setscrollTop] = useState(false);

    // useEffect(() => {
    //     const mainListener = document.getElementById("main");
    
    //     const handleScroll = (e) => {
    //         if (mainListener.scrollTop > 100){
    //             setscrollTop(true);             
    //         } else {
    //             setscrollTop(false);
    //         }
    //     };
    
    //     if (mainListener) {
    //         mainListener.addEventListener("scroll", handleScroll);
    //     }
    
    //     return () => {
    //         if (mainListener) {
    //             mainListener.removeEventListener("scroll", handleScroll);
    //         }
    //     };
    // }, []);

    useEffect(() => {
        sensitivityFactors.current = lettersRef.current.map(() => ({
            x: Math.random() * 0.2 + 0.2,
            y: Math.random() * 0.2 + 0.2,
        }));

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            lettersRef.current.forEach((letter, index) => {
                if (!letter) return;

                const sensitivity = sensitivityFactors.current[index];
                const offsetX = (clientX - centerX) * sensitivity.x / 30;
                const offsetY = (clientY - centerY) * sensitivity.y / 30;

                letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });

            if (imageRef.current) {
                const imageOffsetY = (clientX - centerX) * 0.05;
                const imageOffsetX = (clientY - centerY) * 0.1;
                imageRef.current.style.transform = `translate(${imageOffsetX}px, ${imageOffsetY}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="initial">
            <div className="initial-name">
                {/* <div className={`${!scrollTop ? 'bg-home' : 'bg-next'}`}></div> */}
                <p className="domenico dome">
                    {["D", "O", "M", "Ê"].map((letter, idx) => (
                        <span
                            key={idx}
                            className={`dome-letter letter-${letter.toLowerCase()}`}
                            ref={(el) => (lettersRef.current[idx] = el)}
                        >
                            {letter}
                        </span>
                    ))}
                </p>

                <div className="tela-meio">
                    <img alt="" src={Domenicozin} ref={imageRef} />
                </div>

                <p className="domenico nico">
                    {["N", "I", "C", "O"].map((letter, idx) => (
                        <span
                            key={idx + 4}
                            className={`nico-letter letter-${letter.toLowerCase()}`}
                            ref={(el) => (lettersRef.current[idx + 4] = el)}
                        >
                            {letter}
                        </span>
                    ))}
                </p>
            </div>

            <div className="buttons-initial">
                <div className="resume">
                    <a href="#">
                        <span>→</span>
                        <p>veja um resumo</p>
                    </a>
                </div>
                <div className="conhecer-mais">
                    <a href="#about">
                        <span>↓</span>
                        <p>me conheça mais</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Initial;
