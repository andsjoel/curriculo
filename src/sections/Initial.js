import React, { useEffect, useRef } from "react";
import "./initial.css";
import Domenicozin from "../assets/images/domenicozin.png";

const Initial = () => {
    const lettersRef = useRef([]);
    const imageRef = useRef(null);
    const sensitivityFactors = useRef([]);

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

            <div className="conhecer-mais">
                <p>↓ Venha me conhecer melhor...</p>
            </div>
        </section>
    );
};

export default Initial;
