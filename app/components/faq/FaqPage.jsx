import React from "react";
import AccordionUsage from "./Accordion";
import { Grid } from "@mui/material";

const FaqPage = () => {
  return (
    <>
      <main className="faq-page">
        <div className="container hero-section">
          <h1>Answers to Common Questions:</h1>
        </div>
      </main>
      <main className="faq-cont container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9} sm={10}>
            <AccordionUsage />
          </Grid>
          <Grid item xs={12} md={3} sm={2}></Grid>
        </Grid>
      </main>
    </>
  );
};

export default FaqPage;
