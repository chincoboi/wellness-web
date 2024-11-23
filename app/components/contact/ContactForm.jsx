"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import SuccessModal from "./SuccessModal";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateFirstName = (value) => {
    if (value.trim().length < 2) {
      setErrors(prevErrors => ({ ...prevErrors, firstName: "First name must be at least 2 characters long" }));
      return false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, firstName: "" }));
      return true;
    }
  };

  const validateLastName = (value) => {
    if (value.trim().length < 2) {
      setErrors(prevErrors => ({ ...prevErrors, lastName: "Last name must be at least 2 characters long" }));
      return false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, lastName: "" }));
      return true;
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors(prevErrors => ({ ...prevErrors, email: "Email address must be valid" }));
      return false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: "" }));
      return true;
    }
  };

  const validatePhone = (value) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
      setErrors(prevErrors => ({ ...prevErrors, phone: "Phone number must be a valid 10-digit number" }));
      return false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, phone: "" }));
      return true;
    }
  };

  const validateMessage = (value) => {
    if (value.trim() === "") {
      setErrors(prevErrors => ({ ...prevErrors, message: "Message must not be empty" }));
      return false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, message: "" }));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isMessageValid = validateMessage(message);

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {

      return;
    }

    if (isFirstNameValid || isLastNameValid || isEmailValid || isPhoneValid || isMessageValid) {

      console.log("Form submitted successfully");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Message:", message);
      
      setShowSuccessModal(true);
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Contact Form</h3>
      <p>Use our contact form to send us a message. We'll get back to you promptly.</p>
      <div className="contact-box">
        <InputField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            validateFirstName(e.target.value);
          }}
          error={errors.firstName}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            validateLastName(e.target.value);
          }}
          error={errors.lastName}
        />
      </div>
      <div className="contact-box">
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          error={errors.email}
        />
        <InputField
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            validatePhone(e.target.value);
          }}
          error={errors.phone}
        />
      </div>
      <div className="messagess">
        <textarea
          placeholder="Message"
          className="message"
          style={{ width: '100%', resize: 'none', overflow: 'hidden' }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            validateMessage(e.target.value);
          }}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit" className="primary-btn">Submit</button>
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
    </form>
  );
};
