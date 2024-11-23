import React from "react";
import Link from "next/link";

export const TeleHealth = () => {
  const telehealthimg =
    "../../assets/telehealth1.png";

  return (
    <>
      <main className="telehealth">
        <div className="container hero-section">
          <p>Personalized Healthcare Encounter</p>
          <h1>Experience Telehealth Convenience</h1>
          <h6>
            Booking a telehealth appointment is simple and convenient. Contact
            us to arrange a virtual consultation at a time that suits you best.
          </h6>
          <Link href="/contact-us">
            <button className="hero-btn">
              Schedule a Telehealth Appointment
            </button>
          </Link>
        </div>
      </main>
      <main className="telehealth-details container">
        <p>What to Expect</p>
        <h2>Wondering what a Telehealth Visit Entails?</h2>
        <p className="telehealth-text">
          Our virtual appointments are designed to deliver the same exceptional
          level of care and attention as our in-person visits. During your
          telehealth session, you'll connect with our dedicated healthcare
          professionals through secure video conferencing technology. This
          ensures not only the convenience of virtual care but also prioritizes
          your privacy and comfort throughout the entire experience. Rest
          assured, our telehealth platform is committed to maintaining the high
          standards of care you've come to expect, creating a seamless and
          personalized healthcare encounter from the comfort of your own space.
        </p>
        <div>
          <h3>Advantages of Telehealth</h3>
          <p>
            Telehealth provides several benefits, including easy access to
            healthcare, reduced travel time, and the ability to connect with our
            experts from the comfort of your home or office. It's a convenient
            option for busy individuals seeking quality care.
          </p>
          <Link href="/contact-us">
            <button className="primary-btn">Schedule an Appointment</button>
          </Link>
        </div>
        <img
          src={telehealthimg}
          alt="lady consulting her doctor online with laptop"
          style={{
            filter: "grayscale(100%)",
          }}
        />
      </main>
    </>
  );
};
