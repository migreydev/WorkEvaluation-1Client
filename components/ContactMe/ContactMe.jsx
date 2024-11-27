import React, { useState } from "react";
import "./ContactMe.css";

function ContactMe() {
  // Estados para los valores de los campos del formulario.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Estados para la validez de los campos.
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  // Estado para la validez del formulario.
  const [formValid, setFormValid] = useState(false);

  // Validar nombre
  const validateName = (e) => {
    const value = e.target.value;
    const nameRegex = /^[A-Z][a-z]*$/; //Expresión regular, para empezar por mayuscula
    setName(value); //Seteamos el valor
    setNameValid(nameRegex.test(value));
  };

  //Validar email
  const validateEmail = (e) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar el email
    setEmail(value); //Seteamos el valor
    setEmailValid(emailRegex.test(value));
  };

  //Validar mensaje
  const validateMessage = (e) => {
    const value = e.target.value;
    setMessage(value); //Seteamos el valor
    setMessageValid(value.length >= 20); //Valida que el valor del mensaje sea superior a 20 caracteres
  };

  const validateForm = () => {
    setFormValid(nameValid, emailValid, messageValid);
  };

  // Ejecutar la validación cada vez que un campo cambia
  React.useEffect(() => {
    validateForm();
  }, [name, email, message]);

  // Manejar el envío del formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    if (formValid) {
      setName("");
      setEmail("");
      setMessage("");

      alert("Form sent");
    } else {
      alert("Please correct the errors.");
    }
  };

  return (
    <section id="contactMe" className="contact-me">
      <div className="contact-me-container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={enviarFormulario}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={validateName}
              required
            />
            {!nameValid && (
              <p className="error-message">
                The name must begin with a capital letter.
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={validateEmail}
              required
            />
            {!emailValid && (
              <p className="error-message">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={validateMessage}
              required
            />
            {!messageValid && (
              <p className="error-message">
                The message must be at least 20 characters long.
              </p>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={!formValid}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
