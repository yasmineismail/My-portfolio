import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = (props) => {
  const [Msg, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q5cdowc",
        "template_1p0duqa",
        form.current,
        "mRxzbzOIBuTThRbWP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Successfully Sended!");
  };

  return (
    <section
      className={
        props.toggleState === 7 || window.location.pathname === "/contact"
          ? "contact container section "
          : " sec hide"
      }
    >
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>

          <div className="info">
            <h3>Email :</h3> <p>yasmineiismail@gmail.com</p>
            {/* <div className="separator"></div> */}
            <h3>Phone :</h3>
            <p> +216 92-975-743</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="name"
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                name="email"
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              name="subject"
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button className="link-item btn-1 outer-shadow hover-in-shadow ">
            Send Message
          </button>
        </form>

        <Toaster position="top-right" />
      </div>
    </section>
  );
};

export default Contact;
