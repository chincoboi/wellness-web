"use client";

import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Link from "next/link";

const HomePage = () => {
  const image1 = "/assets/homes1.png";
  const image2 = "/assets/homes2.png";
  const image3 = "/assets/homes3.png";
  const mobimage1 = "/assets/mob-homes1.png";
  const mobimage2 = "/assets/mob-homes2.png";
  const mobimage3 = "/assets/mob-homes3.png";
  const arrowL = "/assets/arrowL.png";
  const arrowR = "/assets/arrowR.png";
  const homeServ = "/assets/home-serv.png";
  const approach1 = "/assets/approach1.png";
  const approach2 = "/assets/approach2.jpg";
  const approach3 = "/assets/approach3.png";
  const quote = "/assets/quote.png";
  const patient1 = "/assets/patient1.png";
  const patient2 = "/assets/patient2.png";
  const patient3 = "/assets/patient3.png";
  const patientnew1 = "/assets/patientnew1.jpg";
  const patientnew2 = "/assets/patientnew2.jpg";

  const images = [image1, image2, image3];
  const mobimages = [mobimage1, mobimage2, mobimage3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setOpacity(1);
    }, 500);
  };

  const goToNextSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setOpacity(1);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const discoverSection = document.querySelector(".discover");
      const discoverDetailText = document.querySelectorAll(".discover-detail");
      const approachSection = document.querySelector(".approach");
      const approachCards = document.querySelectorAll(".approaches");
      const patientSection = document.querySelector(".patient-says");
      const patientCards = document.querySelectorAll(".patientss-speaks");

      if (discoverSection) {
        const discoverSectionTop = discoverSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (discoverSectionTop < windowHeight * 0.75) {
          discoverDetailText.forEach((text, index) => {
            text.style.animation = `slide-up 1s ease-out ${index * 1}s forwards`;
          });
        } else {
          discoverDetailText.forEach((card) => {
            card.style.animation = "none";
          });
        }
      }
      if (approachSection) {
        const approachSectionTop = approachSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (approachSectionTop < windowHeight * 0.75) {
          approachCards.forEach((card, index) => {
            card.style.animation = `fade-in 0.7s ease-out ${index * 0.6}s forwards`;
          });
        } else {
          approachCards.forEach((card) => {
            card.style.animation = "none";
          });
        }
      }
      if (patientSection) {
        const patientSectionTop = patientSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (patientSectionTop < windowHeight * 0.75) {
          patientCards.forEach((card, index) => {
            card.style.animation = `slide-up 0.8s ease-out ${index * 0.6}s forwards`;
          });
        } else {
          patientCards.forEach((card) => {
            card.style.animation = "none";
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="home hero-section">
        <div className="slider-container">
          <img
            src={images[currentIndex]}
            alt="Slider"
            className="slider-image"
            style={{
              opacity,
              filter: "grayscale(100%)",
            }}
          />
          <div className="container  ">
            <div className=" slider-text ">
              <p>Providing Personalized Healthcare</p>
              <h1>High-Quality Care That Transforms Lives.</h1>
              <h6>
                Experience the Transformative Power of Our High-Quality Care, Dedicated to Elevating
                Lives and Fostering Lasting Well-Being.
              </h6>
              <Link href="/contact-us">
                <button className="hero-btn">Make an Appointment</button>
              </Link>
            </div>
          </div>
          <div className="slider-arrow left-arrow" onClick={goToPrevSlide}>
            <img src={arrowL} alt="Left arrow" />
          </div>
          <div className="slider-arrow right-arrow" onClick={goToNextSlide}>
            <img src={arrowR} alt="Right arrow" />
          </div>
        </div>
      </main>
      <main className="mob-hero-section">
        <div className="slider-container">
          <img
            src={mobimages[currentIndex]}
            alt="Slider"
            className="slider-image"
            style={{
              opacity,
              filter: "grayscale(100%)",
            }}
          />
          <div className="container">
            <div className="container slider-text">
              <p>Providing Personalized Healthcare</p>
              <h1>High-Quality Care That Transforms Lives.</h1>
              <h6>
                Experience the Transformative Power of Our High-Quality Care, Dedicated to Elevating
                Lives and Fostering Lasting Well-Being.
              </h6>
              <Link href="/contact-us">
                <button className="hero-btn">Make an Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <main className="discover">
        <h2>Discover Our Services</h2>
        <div className="container">
          <Grid container spacing={8}>
            <Grid item xs={12} md={5} sm={5}>
              <img src={homeServ} alt="female doctor smiling"
                style={{
                  opacity,
                  filter: "grayscale(100%)",
                }} />
            </Grid>
            <Grid item xs={12} md={7} sm={7}>
              <div className="discover-detail">
                <div className="discover-detail-text">
                  <p>
                    <strong>Primary Care:</strong> Our primary care services focus on building
                    strong patient-provider relationships and promoting preventive care. We offer
                    routine check-ups, vaccinations, chronic disease management, and personalized
                    health plans tailored to your unique needs. We believe that proactive healthcare
                    leads to a healthier, happier life.
                  </p>
                </div>
                <div className="discover-detail-text">
                  <p>
                    <strong>Pain Management:</strong> Living with chronic pain can be debilitating.
                    Our pain management experts employ evidence-based treatments, such as medication
                    management, physical therapy, and interventional procedures, to alleviate
                    discomfort and improve your quality of life. Your pain shouldn't define your
                    life; let us help you regain control.
                  </p>
                </div>
                <div className="discover-detail-text">
                  <p>
                    <strong>Men's Health:</strong> At Wellness Services, we understand that
                    men have unique healthcare needs. Our men's health services cover a wide range
                    of issues, including low testosterone, sexual health, and overall wellness. We
                    offer confidential and personalized care to address these concerns and enhance
                    your vitality.
                  </p>
                </div>
                <div className="discover-detail-text">
                  <p>
                    <strong>Weight Loss:</strong> Achieving and maintaining a healthy weight is
                    crucial for overall well-being. Our weight loss programs are customized to your
                    goals and lifestyle. We provide nutritional guidance, fitness recommendations,
                    and ongoing support to help you reach and sustain a healthier weight.
                  </p>
                </div>
              </div>
              <Link href="/services">
                <button className="primary-btn">
                  <span>Read more</span>
                  <ArrowForwardIosRoundedIcon className="arrow-icon" />
                </button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </main>
      <section className="approach">
        <div className="container">
          <div className="head">
            <h3>Our Approach to Value-Based Care</h3>
            <p>
              At Wellness Services, we are committed to value-based care. Here's what that
              means to us:
            </p>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sm={6}>
              <div className="approaches">
                <img src={approach1} alt="doctors and nurses at hospital"
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }} />
                <h4>Quality</h4>
                <p>
                  We prioritize your health and wellness above all else. Our team continuously seeks
                  ways to improve our services, adopting the latest medical advancements to ensure
                  you receive the best care possible.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <div className="approaches">
                <img
                  src={approach2} alt="doctor with patient"
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }} />
                <h4>Compassion</h4>
                <p>
                  We treat every patient with empathy and respect. Your concerns and preferences
                  matter to us, and we strive to make your healthcare journey as comfortable as
                  possible.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <div className="approaches">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={approach3} alt="doctor and nurse" />
                <h4>Results</h4>
                <p>
                  Our ultimate goal is to deliver results that matter to you. We measure success not
                  only by medical outcomes but also by your overall satisfaction and improved
                  quality of life.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="patient-says">
        <h2>See What Our Patients Say</h2>
        <div className="container">
          <Grid container spacing={4} className="patientss-speaks">
            <Grid item xs={12} md={4} sm={4}>
              <div className="patient-speaks">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={quote} alt="quote" />
                <p>
                  Wellness Services has changed my life. Their caring approach to pain
                  management has given me hope and my life back.
                </p>
                <div className="patient-img">
                  <img
                    style={{
                      opacity,
                      filter: "grayscale(100%)",
                    }}
                    src={patient1} alt="patient1" />
                  <span>John Caine</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <div className="patient-speaks">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={quote} alt="quote" />
                <p>
                  Barry and his team genuinely care about their patients. I wouldn't trust
                  anyone else with my health and well-being.
                </p>
                <div className="patient-img">
                  <img
                    style={{
                      opacity,
                      filter: "grayscale(100%)",
                    }}
                    src={patient2} alt="patient2" />
                  <span>Sofia Turner</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <div className="patient-speaks">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={quote} alt="quote" />
                <p>
                  The weight loss program at Wellness Services was exactly what needed. I've
                  lost 30 pounds and counting! Thank you!
                </p>
                <div className="patient-img">
                  <img
                    style={{
                      opacity,
                      filter: "grayscale(100%)",
                    }}
                    src={patient3} alt="patient3" />
                  <span>Lucas Scott</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="patients-container">
        <div className="container patients-cont">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sm={6}>
              <div className="new-patient">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={patientnew1} alt="Young lady smiling" />
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
                  <Link href="/contact-us">
                    <button className="primary-btn">Schedule an Appointment</button>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <div className="new-patients">
                <img
                  style={{
                    opacity,
                    filter: "grayscale(100%)",
                  }}
                  src={patientnew2} alt="Young man smiling" />
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
    </>
  );
};

export default HomePage;
