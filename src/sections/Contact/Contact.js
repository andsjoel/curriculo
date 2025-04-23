import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_u0l9of9",
            "template_g6nte0o",
            form.current,
            "2DourN_mV5L-Lm8_2"
        ).then(
            (result) => {
                console.log(result.text);
                alert("Mensagem enviada com sucesso!");
            },
            (error) => {
                console.log(error.text);
                alert("Erro ao enviar. Tente novamente.");
            }
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h2 className="contact-title"><span>/</span>contato</h2>

            <div className="text">
                <p>
                Me manda uma mensagem de bom dia ☀️, conta como foi sua semana ou me apresenta uma ideia de projeto que a gente possa construir junto!
                </p>
                <p>
                Vai ser um prazer trabalhar com você 😊
                </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="me diga seu nome" required />
                <input type="email" name="email" placeholder="qual seu email?" required />
                <textarea name="message" placeholder="o que posso fazer por você?" rows="6" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
