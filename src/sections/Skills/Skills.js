import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiMysql } from "react-icons/si";
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiGit, SiGithub, SiSass } from "react-icons/si";
import { FaLaptopCode, FaPlug } from "react-icons/fa";
import "./skills.css";

const Skills = () => {
    const [hoverFront, setHoverFront] = useState(false);
    const [hoverBack, setHoverBack] = useState(false);

    return (
        <section id="skills">
            <h2 className="skills-title"><span>/</span>o que sei?</h2>

            <div
                className="display-one"
                onMouseEnter={() => setHoverFront(true)}
                onMouseLeave={() => setHoverFront(false)}
            >
                <div className="front-end">
                    <span className="hashtag"></span>
                    <h2 className="front">FRONT</h2>
                    <div className="traco-div">
                        <span className="traco"></span>
                        <div className={`icon-slide ${hoverFront ? 'show' : ''}`}>
                            <div>
                                <span><FaHtml5 /></span>
                                <p>HTML</p>
                            </div>
                            <div>
                                <span><FaCss3Alt /></span>
                                <p>CSS</p>
                            </div>
                            <div>
                                <span><FaJs /></span>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <span><FaReact /></span>
                                <p>React</p>
                            </div>
                            
                        </div>
                    </div>
                    <h2 className="end">END</h2>
                </div>
            </div>

            <div
                className="display-two"
                onMouseEnter={() => setHoverBack(true)}
                onMouseLeave={() => setHoverBack(false)}
            >
                <div className="back-end">
                    <span className="hashtag"></span>
                    <h2 className="back">BACK</h2>
                    <div className="traco-div">
                        <span className="traco"></span>
                        <div className={`icon-slide ${hoverBack ? 'show' : ''}`}>
                            <div>
                                <span><FaNodeJs /></span>
                                <p>NOodeJS</p>
                            </div>
                            <div>
                                <span><SiExpress /></span>
                                <p>Express</p>
                            </div>
                            <div>
                                <span><SiMongodb /></span>
                                <p>Mongodb</p>
                            </div>
                            <div>
                                <span><FaDatabase /></span>
                                <p>Database</p>
                            </div>
                            <div>
                                <span><SiFirebase /></span>
                                <p>Firebase</p>
                            </div>
                            <div>
                                <span><SiMysql /></span>
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="end">END</h2>
                </div>
            </div>
            <div className="geral">
                    <div>
                        <span><SiAdobeillustrator /></span>
                        <p>Illustrator</p>
                    </div>
                    <div>
                        <span><SiAdobephotoshop /></span>
                        <p>Photoshop</p>
                    </div>
                    <div>
                        <span><SiFigma /></span>
                        <p>Figma</p>
                    </div>
                    <div>
                        <span><SiGit /></span>
                        <p>Git</p>
                    </div>
                    <div>
                        <span><SiGithub /></span>
                        <p>GitHub</p>
                    </div>
                    <div>
                        <span><FaPlug /></span>
                        <p>APIs</p>
                    </div>
                    <div>
                        <span><FaLaptopCode /></span>
                        <p>Responsivo</p>
                    </div>
                    <div>
                        <span><SiSass /></span>
                        <p>SASS</p>
                    </div>
            </div>

        </section>
    );
};

export default Skills;
