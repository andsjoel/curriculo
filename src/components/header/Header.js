import { useEffect, useState } from "react";
import HamburgerMenu from "../burguer/HamburguerMenu";
import iconInsta from "../../assets/images/icons/insta_icon.svg";
import iconGithub from "../../assets/images/icons/github_icon.svg";
import iconWpp from "../../assets/images/icons/wpp_icon.svg";
import "./header.css"

const Header = () => {
    const [scrollTop, setscrollTop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleStateFromBurger = (state) => {
        setIsOpen(state);
    };
    
    
        useEffect(() => {
            const mainListener = document.getElementById("main");
        
            const handleScroll = (e) => {
                if (mainListener.scrollTop > 100){
                    setscrollTop(true);             
                } else {
                    setscrollTop(false);
                }
            };
        
            if (mainListener) {
                mainListener.addEventListener("scroll", handleScroll);
            }
        
            return () => {
                if (mainListener) {
                    mainListener.removeEventListener("scroll", handleScroll);
                }
            };
        }, []);

    return (
        <header className={`${!scrollTop ? 'bg-home' : 'bg-next'} ${isOpen ? 'burguerOpen' : 'burguerClose'}`}>
            <HamburgerMenu receiveState={handleStateFromBurger} />
            <div className={`header-icons ${isOpen ? 'open' : ''} ${!scrollTop ? '' : 'icons-active'}`}>
                <a href="https://www.instagram.com/doconime" target="_blank" rel="noopener noreferrer">
                    <img src={iconInsta} alt="Instagram" />
                </a>
                <a href="https://github.com/andsjoel" target="_blank" rel="noopener noreferrer">
                    <img src={iconGithub} alt="GitHub" />
                </a>
                <a href="https://wa.me/61999760064" target="_blank" rel="noopener noreferrer">
                    <img src={iconWpp} alt="WhatsApp" />
                </a>
            </div>
        </header>
    );
}

export default Header;