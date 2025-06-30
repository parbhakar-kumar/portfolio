import React, { useRef } from "react";
import * as emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehwb9l6', 'template_bnf01el', form.current, 'ZHGM7uk7SWDPEvOUS')
      .then(() => {
        alert("Message sent successfully");
        form.current.reset();
      }, (err) => {
        alert("Failed to send message, please try again", err.text);
      });
  };

  return (
    <div className="contact text-center ">
      <div className="">
        <h1 className="m- text-center mt- text-amber-300 text-5xl">📬 Contact Me</h1>
        <p className="text-3xl m-2 text-amber-400"> Have a question, project idea, or just want to connect? Feel free to send a message!</p>
        <div className="flex ">
          <img className="cont_img" src="/img/contact.jpeg" alt="" />
          <div className="p-20">
            <form ref={form} onSubmit={sendEmail} action="">
              <div className="text-white m-1 ml-80">Enter your Name:
                <input
                  className="border-2 m-1.5"
                  placeholder="Your Name"
                  type="text"
                  name="user_name"
                  required
                />
              </div>
              <div className="text-white m-1 ml-80">Enter your Email:
                <input
                  className="border-2 m-1.5"
                  placeholder="Your Email"
                  type="email"
                  name="user_email"
                  required
                />
              </div>
              <textarea
                name="message"
                rows={5}
                className="text-white border-1 w-96 ml-80"
                placeholder="Your message"
                required
              />
              <button
                type="submit"
                className="border-4 text-black text-2xl rounded-4xl w-96 ml-80 bg-amber-500 hover:bg-amber-800"
              >
                Send Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
