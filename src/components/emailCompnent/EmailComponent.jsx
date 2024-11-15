import React, { useState } from "react";
import styles from "./EmailComponent.module.css";
import Mail from "../../assets/mail.svg";
import emailjs from "@emailjs/browser";
import AlertBox from "../alertBox/AlertBox";
import Loader from "../loder/Loader";

function EmailComponent() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [viewLoader, setViewLoader] = useState(false);
  const [viewAlert, setViewAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // Track alert message

  const sendEmail = async (e) => {
    e.preventDefault();
    setViewLoader(true); // Show loader while email is being sent

    const service_ID = "service_gve5exf";
    const template_ID = "template_r5yghf4";
    const public_key = "ZDMmemVrE3TRqDlZj";

    // A new object that will contain the dynamic template parameters
    const template = {
      from_name: fname,
      from_email: email,
      to_name: "Satyam Pawar",
      message: message,
    };

    try {
      // Sending email using emailjs with async/await
      const response = await emailjs.send(service_ID, template_ID, template, public_key);

      console.log("Email sent successfully", response);

      // Hide loader and show success alert
      setViewLoader(false);
      setViewAlert(true);
      setAlertMessage("Your message has been sent successfully!");

      // Clear form after successful submission
      setFname("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email", error);

      // Hide loader and show error alert
      setViewLoader(false);
      setViewAlert(true);
      setAlertMessage("There was an error sending your message. Please try again.");

      // Optionally, you can log the error or handle it further
    }
  };

  return (
    <div className={styles.email_component}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Send me a Message</h1>
        <img src={Mail} alt="" className={styles.header_img} />
      </div>

      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              name="from_name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${styles.email_input}`}
              type="email"
              placeholder="Enter your email address"
              value={email}
              name="user_email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.col} ${styles.message_input_section}`}>
            <label htmlFor="message">Enter your Message</label>
            <textarea
              className={styles.input}
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              required
              placeholder="This is my message for you"
            ></textarea>
          </div>
        </div>

        <button className={styles.submit_btn} type="submit">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>

      {/* Show loader when sending the email */}
      {viewLoader && <Loader />}

      {/* Show success or error alert based on viewAlert state */}
      {viewAlert && <AlertBox message={alertMessage} />}
    </div>
  );
}

export default EmailComponent;
