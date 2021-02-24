import React, { useState } from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactForm
} from "./contactElements";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const handleOnSubmit = e => {
    e.preventDefault();
    if (name === "" && email === "") {
      setError(true);
      alert("error");
    } else {
      alert("submitted");
      setName("");
      setEmail("");
      setMessage("");
      setError(false);
    }
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <h1>Contact Us Now!</h1>
        <ContactForm onSubmit={handleOnSubmit}>
          <input
            onError={error}
            type="text"
            placeholder="Your name*"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {error && <p className="error">Name is Required</p>}
          <input
            type="email"
            error={error}
            placeholder="Your email*"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <p className="error">Email is Required</p>}
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button>Send Message</button>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
