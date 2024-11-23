import { Grid } from "@mui/material";
import React from "react";
import { ContactForm } from "./ContactForm";
import Map from "./Map";

const Location = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
    <path
      d="M10.5 25C11.2255 25 11.8953 24.7017 12.3418 24.1798C15.5751 20.3803 21 13.4321 21 9.56481C21 4.29094 16.2895 0 10.5 0C4.71049 0 0 4.29094 0 9.56481C0 13.4321 5.42488 20.3837 8.66194 24.1798C9.10471 24.7017 9.77445 25 10.5 25ZM4.68072 9.56481C4.68072 6.63639 7.28526 4.26383 10.5 4.26383C13.7147 4.26383 16.3193 6.63639 16.3193 9.56481C16.3193 12.4932 13.7147 14.8658 10.5 14.8658C7.28526 14.8658 4.68072 12.4898 4.68072 9.56481Z"
      fill="white"
    />
  </svg>
);
const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path
      d="M16.8903 13.5465C18.1287 14.2862 19.275 15.0273 20.2927 15.7721C20.9477 16.2514 21.1932 17.1301 20.8354 17.8586C20.1058 19.3438 18.8426 20.4173 16.9191 20.8416C15.3554 21.1865 13.7239 20.9513 12.2608 20.3007C9.87303 19.2389 7.53195 17.6463 5.44283 15.5572C3.3537 13.468 1.76106 11.127 0.699294 8.73915C0.0487149 7.27607 -0.18646 5.64456 0.158406 4.08093C0.582653 2.15738 1.65624 0.894227 3.14144 0.164631C3.86989 -0.193213 4.74856 0.0523048 5.22786 0.707252C5.97267 1.72501 6.71384 2.87131 7.45351 4.10971C7.84107 4.75859 7.75466 5.59544 7.22777 6.13732C6.76263 6.61567 6.27532 7.07224 5.76641 7.50684C5.15409 8.02975 5.06272 8.93705 5.52438 9.59678C6.30035 10.7057 7.19723 11.7782 8.20952 12.7905C9.22181 13.8028 10.2943 14.6996 11.4032 15.4756C12.063 15.9373 12.9702 15.8459 13.4932 15.2336C13.9278 14.7247 14.3843 14.2374 14.8627 13.7722C15.4046 13.2453 16.2414 13.1589 16.8903 13.5465Z"
      fill="white"
    />
  </svg>
);
const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
    <path
      d="M20.9998 1.97637C21.0013 1.62437 20.8738 1.28441 20.6421 1.02253C20.4103 0.760471 20.0908 0.595123 19.7456 0.558495C19.4004 0.52186 19.054 0.616584 18.7737 0.824187L10.4999 6.86161L2.22367 0.824187C1.98408 0.648269 1.69583 0.553878 1.40008 0.554537C1.02866 0.554537 0.672536 0.704051 0.409993 0.970232C0.147459 1.23642 0 1.59751 0 1.97392V14.9668C0 15.3727 0.159017 15.762 0.44221 16.049C0.725253 16.3362 1.10921 16.4974 1.50959 16.4974H2.79997V4.75119L10.5 10.3653L18.2 4.75119V16.4974H19.495C19.8945 16.496 20.2773 16.3343 20.5594 16.0474C20.8416 15.7605 21 15.3719 21 14.9668L20.9998 1.97637Z"
      fill="white"
    />
    <path d="M4.50293 14.7043H16.4984V16.5H4.50293V14.7043Z" fill="white" />
    <path d="M14.1206 2.26493L16.5312 0.5H4.46777L6.90153 2.26493H14.1206Z" fill="white" />
  </svg>
);

const ContactPage = () => {
  const patientnew1 = "../../assets/patientnew1.jpg";
  const patientnew2 = "../../assets/patientnew2.jpg";
  const contact1 = "../../assets/contact1.png";

  return (
    <>
      <main className="contact">
        <div className="hero-section container">
          <h1>Reach Out to Us</h1>
          <h6>Have questions or want to schedule an appointment?</h6>
        </div>
      </main>
      <section className="contact-page patients-container">
        <div className="container patients-cont">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sm={6}>
              <div className="new-patient">
                <img src={patientnew1} alt="Young lady smiling"
                  style={{
                    filter: "grayscale(100%)",
                  }} />
                <div className="new-patient-cont">
                  <h3>New Patients</h3>
                  <p>
                    If you are a new patient, please download and complete our intake forms before
                    your first appointment to expedite the process:
                  </p>
                  <div className="new-patient-btn">
                    <button className="secondary-btn">Download Form 1</button>
                    <button className="secondary-btn">Download Form 2</button>
                  </div>
                  <button className="primary-btn">Schedule an Appointment</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <div className="new-patients">
                <img src={patientnew2} alt="Young man smiling"
                  style={{
                    filter: "grayscale(100%)",
                  }} />
                <div className="existing-patient-cont">
                  <h3>Existing Patients</h3>
                  <p>
                    For our returning patients, please access your Patient Portal to schedule an
                    appointment with us from there.
                  </p>
                  <button className="tertiary-btn">Access Your Patient Portal</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="form-cont">
        <div className="container form-cont-cont">
          <Grid container spacing={4} alignItems="center" className="image-text-container">
            <Grid item xs={12} md={6} sm={12}>
              <div className="new-patients">
                <img src={contact1} alt="Young man smiling wear hoodie"
                  style={{
                    filter: "grayscale(100%)",
                  }} />
                <div className="existing-patient-cont">
                  <h3>Contact Us At:</h3>
                  <div className="contact-detail">
                    <div className="c-detail">
                      <Location />
                      <span>Clinic Address: 222 Test Test Ave, WS 888222</span>
                    </div>
                    <div className="c-detail">
                      <Phone />
                      <span>Phone Number: +1(222)222-0990</span>
                    </div>
                    <div className="c-detail">
                      <Mail />
                      <span>Email Address: info@test.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </section>
      {/* <section className="map container">
        <div>
          <Map />
        </div>
      </section> */}
    </>
  );
};

export default ContactPage;
