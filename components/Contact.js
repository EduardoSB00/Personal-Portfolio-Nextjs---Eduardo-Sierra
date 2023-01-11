import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [message,setMessage] = useState("");
    const [name,setName] =  useState("");
    const [email, setEmail] = useState("");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_j37f65n', 'template_2raumrl', e.target, 'SJZ-Y0Nz0w96lGfOZ')
          .then((result) => {
              console.log(result.text);
              alert("su mensaje se ha mandado exitosamente.");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          handleFormCleanup();
    }

    function handleFormCleanup(){
        setMessage("");
        setName("");
        setEmail("");
    }
    
    return (  
        <section className="contact-component" id="contact">
            <div className="contact-container">

                <form action="" className="contact__form" onSubmit={sendEmail}>
                    <h2 className="contact__form-title">Enviame un Mensaje!</h2>

                    <label>
                        <h3 className="contact__form-subtitle">Nombre</h3>
                        <input type="text" value={name} name="name" onChange={(e)=> {setName(e.target.value)}}/>
                    </label>

                    <label>
                        <h3 className="contact__form-subtitle">Email</h3>
                        <input type="text" value={email} name="email" onChange={(e)=> {setEmail(e.target.value)}}/>
                    </label>

                    <label>
                        <h3 className="contact__form-subtitle">Mensaje</h3>
                        <textarea cols="30" rows="10" value={message} name="message" onChange={(e)=> {setMessage(e.target.value)}}></textarea>
                    </label>
                    <button type="submit" className="contact__form-button">Enviar</button>
                </form>

                <div className="contact__information">
                    <h2 className="contact__information-title">Informacion de Contacto</h2>
                    <p className="contact__email">emsierra00@gmail.com</p>
                    <p className="contact__phone">+504 9851-7974</p>

                    <div className="contact__icons">
                        <a href="https://www.instagram.com/e_sierra57/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/50498517974" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://github.com/EduardoSB00" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>

            </div>
        </section>
      );
}
 
export default Contact;