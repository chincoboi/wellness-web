"use client";

import React, { useRef, useEffect } from "react";
import "./SuccessModal.css";

const SuccessModal = ({ onClose }) => {
  const modalicon = "https://amorserv-assets.s3.amazonaws.com/wellness/modalicon.png";

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <div className="modal-content">
          <img src={modalicon} alt="success check icon" />
          <h4>Submit Successful</h4>
          <p>Your message is successfully submitted. We will get back to you promptly.</p>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
