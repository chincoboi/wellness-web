import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
      // defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="accordion-header">
            <h3>Insurance</h3>
            <p>
              Learn about the insurance plans we accept and how billing works.
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-content">
            <strong>Q: What insurance plans do you accept?</strong>
            <p>
              <strong>A:</strong> We accept a wide range of insurance plans to
              accommodate our diverse patient base. To find out if your specific
              plan is accepted, please contact our billing department, and they
              will be happy to assist you.
            </p>
          </div>
          <div className="accordion-content">
            <strong>Q: How does the billing process work?</strong>
            <p>
              <strong>A:</strong> Our billing process is designed to be
              transparent and straightforward. After your visit, we will submit
              a claim to your insurance provider. Once the claim is processed,
              you will receive a statement outlining any outstanding balances.
              For a detailed breakdown or if you have specific billing
              questions, please contact our billing department.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="accordion-header">
            <h3>Appointments</h3>
            <p>
              Find information on appointment scheduling, cancellation policies,
              and what to bring to your appointment.
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-content">
            <strong>Q: How can I schedule an appointment?</strong>
            <p>
              <strong>A:</strong> Scheduling an appointment is easy. You can
              call our reception during regular business hours, use our online
              appointment booking system on our website, or visit our clinic in
              person to schedule a convenient time.
            </p>
          </div>
          <div className="accordion-content">
            <strong>Q: What is your cancellation policy?</strong>
            <p>
              <strong>A:</strong> We understand that unforeseen circumstances
              may arise. If you need to cancel or reschedule your appointment,
              please notify us at least 24 hours in advance. This allows us to
              accommodate other patients who may need that time slot.
            </p>
          </div>
          <div className="accordion-content">
            <strong>Q: What should I bring to my appointment?</strong>
            <p>
              <strong>A:</strong> To ensure a smooth visit, please bring your
              insurance card, a form of identification, a list of current
              medications, and any relevant medical records. If you are a new
              patient, please complete any required forms before your
              appointment.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <div className="accordion-header">
            <h3>Payment Methods</h3>
            <p>
              Understand the payment methods we accept for your convenience.
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-content">
            <strong>Q: What payment methods do you accept?</strong>
            <p>
              <strong>A:</strong> We accept a variety of payment methods,
              including credit cards, debit cards, and digital wallets. We aim
              to provide convenient options to suit your preferences.
            </p>
          </div>
          <div className="accordion-content">
            <strong>Q: Can I set up a payment plan for larger bills?</strong>
            <p>
              <strong>A:</strong> We understand that some bills may be larger or
              unexpected. If you require a payment plan, please contact our
              billing department before your due date to discuss available
              options.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
