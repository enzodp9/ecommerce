import "./contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="footer-brand">
                <img src="assets/logo.svg" alt="logo" />
            </div>
            <div className="links">
                <a href="">Quienes somos</a>
                <a href="">Politica de Privacidad</a>
                <a href="">Programa de fidelidad</a>
                <a href="">Nuestras Tiendas</a>
                <a href="">Quiero ser franquiciado</a>
                <a href="">Anuncie aqui</a>
            </div>

            <div className="form">
                <p>Contactanos</p>
                <label htmlFor="name">Nombre</label>
                <input className="input-name" type="text" id="name" name="name" />

                <label htmlFor="message">Mensaje</label>
                <textarea className="input-message" id="message" name="message"></textarea>

                <button type="submit">Enviar</button>
            </div>
        </section>
    );
};

export default Contact;
