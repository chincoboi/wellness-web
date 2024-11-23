import { Grid } from "@mui/material";
import React from "react";

const Team = () => {
  const Team1 =
    "../assets/team1.png";

  return (
    <>
      <main className="team">
        <div className="container hero-section">
          <h1>Meet Our Team of Experts</h1>
        </div>
      </main>
      <main className="team-members container">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sm={6}>
            <img src={Team1} alt="Team member 1"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <h3>Barry</h3>
            <h6>Founder and Lead Healthcare Provider</h6>

            <p>
              Barry is a highly experienced Family Nurse Practitioner
              with a passion for improving patients' lives through comprehensive
              care. With a background in primary care, pain management, men's
              health, and weight loss, he leads our team with dedication and
              expertise.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sm={6}>
            <h3>Manny</h3>
            <h6>Specialist</h6>

            <p>
              Barry is a highly experienced Family Nurse Practitioner
              with a passion for improving patients' lives through comprehensive
              care. With a background in primary care, pain management, men's
              health, and weight loss, he leads our team with dedication and
              expertise.
            </p>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <img src={Team1} alt="Team member 1"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sm={6}>
            <img src={Team1} alt="Team member 1"
              style={{
                filter: "grayscale(100%)",
              }} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <h3>Sonny</h3>
            <h6>Nurse</h6>

            <p>
              Barry is a highly experienced Family Nurse Practitioner
              with a passion for improving patients' lives through comprehensive
              care. With a background in primary care, pain management, men's
              health, and weight loss, he leads our team with dedication and
              expertise.
            </p>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Team;
