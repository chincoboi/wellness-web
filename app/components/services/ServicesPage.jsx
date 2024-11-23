"use client";

import React, { useEffect } from "react";
import { Grid } from "@mui/material";

const ServicesPage = () => {
  const servicesimg1 = "/../../../assets/service-img1.png";
  const servicesimg2 = "/../../../assets/service-img2.png";
  const servicesimg3 = "/../../../assets/service-img3.png";
  const servicesimg4 = "/../../../assets/service-img4.png";

  useEffect(() => {
    const handleScroll = () => {
      const serviceLists = document.querySelectorAll(".service-lists");
      serviceLists.forEach((service, index) => {
        const serviceTop = service.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (serviceTop < windowHeight * 0.75 && serviceTop > -windowHeight * 0.75) {
          service.classList.add(index % 2 === 0 ? "slide-right" : "slide-left");
        } else {
          service.classList.remove("slide-right", "slide-left");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <main className="services">
        <div className="container hero-section">
          <p>Caring for the health of you and your family.</p>
          <h1>Our Services</h1>
        </div>
      </main>
      <main className="service-list container">
        <Grid
          container
          spacing={4}
          alignItems="center"
          className="service-lists image-text-container"
        >
          <Grid item xs={12} md={6} sm={6}>
            <img src={servicesimg1} alt="Primary Care"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <h2>Primary Care</h2>
            <p>
              Our primary care services encompass a wide range of healthcare needs, including annual
              check-ups, preventive screenings, vaccinations, and treatment for acute and chronic
              conditions. Our patient-centered approach ensures that your unique health concerns are
              addressed with care and compassion.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" className="service-lists">
          <Grid item xs={12} md={6} sm={6}>
            <h2>Pain Management</h2>
            <p>
              Chronic pain can significantly impact your daily life. Our pain management team
              combines the latest therapies with a holistic approach to help you regain function and
              improve your well-being. We offer various treatments, including medications, physical
              therapy, and minimally invasive procedures, tailored to your needs.
            </p>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <img src={servicesimg2} alt="Pain Management"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          alignItems="center"
          className="service-lists image-text-container"
        >
          <Grid item xs={12} md={6} sm={6}>
            <img src={servicesimg3} alt="Men’s Health"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <h2>Men’s Health</h2>
            <p>
              Men's health concerns deserve specialized care. We provide comprehensive men's health
              services, addressing issues such as low testosterone, erectile dysfunction, prostate
              health, and overall well-being. Our confidential consultations and individualized
              treatment plans aim to enhance your vitality and quality of life.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" className="service-lists">
          <Grid item xs={12} md={6} sm={6}>
            <h2>Weight Loss</h2>
            <p>
              Our weight loss programs are designed to support your journey to a healthier you. We
              work with you to develop a personalized plan that includes dietary guidance, exercise
              recommendations, and ongoing monitoring. Our goal is not just weight loss but helping
              you achieve and sustain a healthy lifestyle.
            </p>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <img src={servicesimg4} alt="Weight Loss"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default ServicesPage;
