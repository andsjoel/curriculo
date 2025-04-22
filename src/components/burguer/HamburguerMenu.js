import React, { useEffect, useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ receiveState }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    receiveState(isOpen);
  }, [isOpen, receiveState]);

  return (
    <div className={`burger ${isOpen ? "hamburger-container-open" : "hamburger-container"}`}>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
        <ul>
          <li><a href="#initial">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
