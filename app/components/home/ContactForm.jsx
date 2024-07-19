"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "@/app/styles/home.module.scss";
import RoundBtn from "../common/RoundBtn";

const ContactForm = () => {
  //Variables
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  //Send email
  const sendEmail = (e) => {
    setLoading(true);
    setResponse("Sending message,please wait...");
    e.preventDefault();

    emailjs
      .sendForm("service_yg0dp4f", "template_e0licgs", form.current, {
        publicKey: "WJjQ96wR4s-U284eP",
      })
      .then(
        () => {
          e.target.reset();
          setResponse("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          setResponse(
            "There was a problem sending the message.Please try again"
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className={styles.contactUs}>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <input type="text" name="name" required placeholder="Your name" />
        <input type="email" name="email" required placeholder="Email address" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea rows="7" name="message" required placeholder="Message" />
        <RoundBtn
          type="submit"
          text={loading ? "Sending message..." : "Send Message"}
          customClass={styles.btn}
        />
      </form>
      {response.length > 0 && <div className={styles.response}>{response}</div>}
    </div>
  );
};

export default ContactForm;
