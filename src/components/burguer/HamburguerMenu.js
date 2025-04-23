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
          <li><a href="#initial">o começo</a></li>
          <li><a href="#about">vem me conhecer</a></li>
          <li><a href="#skills">sei de coisas</a></li>
          <li><a href="#contact">mande um oi</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
