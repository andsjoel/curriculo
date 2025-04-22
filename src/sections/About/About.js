import "./about.css"
import carrossel01 from "../../assets/images/carrossel-about/carrossel01.png";
import carrossel02 from "../../assets/images/carrossel-about/carrossel02.png";
import carrossel03 from "../../assets/images/carrossel-about/carrossel03.png";
import carrossel04 from "../../assets/images/carrossel-about/carrossel04.png";
import carrossel05 from "../../assets/images/carrossel-about/carrossel05.png";
import carrossel06 from "../../assets/images/carrossel-about/carrossel06.png";
import carrossel07 from "../../assets/images/carrossel-about/carrossel07.png";
import carrossel08 from "../../assets/images/carrossel-about/carrossel08.png";
import carrossel09 from "../../assets/images/carrossel-about/carrossel09.png";

const About = () => {
  const aboutText = "estudante multidisciplinar. Desenvolvedor web, ilustrador e tatuador transformando o caos em criatividade.";

  return (
    <section id="about">
      <h2><span>/</span>quem sou eu?</h2>
      <div className='about-content'>
        <div className='about-left'>
          <p className='about-left-text'>
            {aboutText.split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </p>
          <div className='tags'>
            <p><span>#</span>arte</p>
            <p><span>#</span>código</p>
            <p><span>#</span>inovação</p>
          </div>
        </div>

        <div className="about-right">
            
            <div class="gallery">
            <input type="checkbox" />
                <img src={ carrossel01 } alt="a forest after an apocalypse" />
                <img src={ carrossel02 } alt="a waterfall and many rocks"/>
                <img src={ carrossel03 } alt="a house on a mountain"/>
                <img src={ carrossel04 } alt="sime pink flowers"/>
                <img src={ carrossel05 } alt="big rocks with some trees"/>
                <img src={ carrossel06 } alt="a waterfall, a lot of tree and a great view from the sky"/>
                <img src={ carrossel07 } alt="a cool landscape"/>
                <img src={ carrossel08 } alt="inside a town between two big buildings"/>
                <img src={ carrossel09 } alt="a great view of the sea above the mountain" />
            </div>

          </div>
      </div>
    </section>
  );
}

export default About;
