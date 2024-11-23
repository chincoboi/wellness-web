import React from "react";
import { Grid } from "@mui/material";
import "./footer.css";
import Link from "next/link";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M14.7053 0C6.58368 0 0 6.58368 0 14.7053C0 22.8269 6.58368 29.4106 14.7053 29.4106C22.8269 29.4106 29.4106 22.8269 29.4106 14.7053C29.4106 6.58368 22.8269 0 14.7053 0ZM18.1886 10.162H15.9782C15.7163 10.162 15.4252 10.5066 15.4252 10.9646V12.5608H18.1901L17.772 14.837H15.4252V21.6704H12.8166V14.837H10.4499V12.5608H12.8166V11.222C12.8166 9.3011 14.1492 7.74019 15.9782 7.74019H18.1886V10.162Z"
      fill="white"
    />
  </svg>
);
const Xapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="14.8804" cy="15.112" r="14.8804" fill="white" />
    <mask id="mask0_329_1788" maskUnits="userSpaceOnUse" x="4" y="4" width="22" height="22">
      <path d="M25.3845 4.6084H4.37695V25.616H25.3845V4.6084Z" fill="white" />
    </mask>
    <g mask="url(#mask0_329_1788)">
      <path
        d="M22.9227 4.6084H6.83878C5.47915 4.6084 4.37695 5.71059 4.37695 7.07022V23.1541C4.37695 24.5138 5.47915 25.616 6.83878 25.616H22.9227C24.2823 25.616 25.3845 24.5138 25.3845 23.1541V7.07022C25.3845 5.71059 24.2823 4.6084 22.9227 4.6084Z"
        fill="white"
      />
      <path
        d="M18.9798 8.71143H21.1515L16.4071 14.134L21.9885 21.5129H17.6183L14.1954 17.0376L10.2788 21.5129H8.10584L13.1805 15.7129L7.82617 8.71143H12.3073L15.4013 12.802L18.9798 8.71143ZM18.2177 20.2131H19.421L11.6535 9.94299H10.3622L18.2177 20.2131Z"
        fill="#1A202C"
      />
    </g>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="15" fill="#1A202C" />
    <path
      d="M21.5429 15C21.5429 16.2188 21.0587 17.3877 20.1969 18.2495C19.335 19.1113 18.1662 19.5954 16.9474 19.5954C15.7286 19.5954 14.5598 19.1113 13.6979 18.2495C12.8361 17.3877 12.3519 16.2188 12.3519 15C12.3519 14.7381 12.3794 14.4823 12.4269 14.2344H10.8201V20.357C10.8201 20.7829 11.1647 21.1275 11.5906 21.1275H22.3055C22.5096 21.1271 22.7052 21.0458 22.8494 20.9014C22.9935 20.757 23.0745 20.5612 23.0745 20.357V14.2344H21.4676C21.5151 14.4823 21.5429 14.7381 21.5429 15ZM16.9474 18.3035C17.3498 18.3034 17.7484 18.2241 18.1201 18.07C18.4919 17.9159 18.8296 17.6901 19.1141 17.4056C19.3986 17.121 19.6242 16.7832 19.7781 16.4113C19.932 16.0395 20.0111 15.6409 20.011 15.2385C20.0109 14.8361 19.9315 14.4376 19.7774 14.0658C19.6233 13.694 19.3975 13.3563 19.1129 13.0718C18.8284 12.7872 18.4905 12.5616 18.1187 12.4077C17.747 12.2538 17.3485 12.1746 16.9461 12.1747C16.1333 12.1749 15.354 12.498 14.7794 13.0728C14.2049 13.6476 13.8823 14.4271 13.8825 15.2398C13.8827 16.0526 14.2057 16.832 14.7805 17.4065C15.3554 17.9811 16.1349 18.3037 16.9474 18.3035ZM20.6238 11.0233H22.4604C22.5825 11.0233 22.6995 10.9749 22.7859 10.8887C22.8724 10.8026 22.9211 10.6857 22.9215 10.5637V8.72709C22.9215 8.60475 22.8729 8.48746 22.7864 8.40102C22.6999 8.31457 22.5826 8.26598 22.4604 8.26598H20.6238C20.5015 8.26598 20.3843 8.31457 20.2978 8.40102C20.2113 8.48746 20.1627 8.60475 20.1627 8.72709V10.5637C20.1642 10.8165 20.371 11.0233 20.6238 11.0233ZM16.9474 0.534721C13.0473 0.534721 9.30703 2.08402 6.54923 4.84179C3.79145 7.59957 2.24115 11.3399 2.24115 15.24C2.24115 19.1401 3.79145 22.8805 6.54923 25.6382C9.30703 28.396 13.0473 29.9453 16.9474 29.9453C18.8785 29.9453 20.7907 29.565 22.5749 28.826C24.3591 28.0869 25.9802 27.0038 27.3457 25.6382C28.7112 24.2727 29.7944 22.6517 30.5334 20.8676C31.2724 19.0834 31.6528 17.1713 31.6528 15.24C31.6528 13.3089 31.2724 11.3967 30.5334 9.61257C29.7944 7.82838 28.7112 6.20726 27.3457 4.84179C25.9802 3.47632 24.3591 2.39316 22.5749 1.65415C20.7907 0.915144 18.8785 0.534721 16.9474 0.534721ZM24.6063 21.1972C24.6063 22.1331 23.8404 22.899 22.9045 22.899H10.9901C10.0542 22.899 9.28828 22.1331 9.28828 21.1972V9.28284C9.28828 8.34685 10.0542 7.58094 10.9901 7.58094H22.9045C23.8404 7.58094 24.6063 8.34685 24.6063 9.28284V21.1972Z"
      fill="white"
    />
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
    <path
      d="M0 15.3213C0 23.3294 6.49187 29.8213 14.5 29.8213C22.5081 29.8213 29 23.3294 29 15.3213C29 7.31316 22.5081 0.821289 14.5 0.821289C6.49187 0.821289 0 7.31316 0 15.3213Z"
      fill="white"
    />
    <path
      d="M10.5125 22.5713H7.43125V12.8744H10.5125V22.5713ZM8.97188 11.515C7.975 11.515 7.25 10.79 7.25 9.79316C7.25 8.79629 8.06563 8.07129 8.97188 8.07129C9.96875 8.07129 10.6938 8.79629 10.6938 9.79316C10.6938 10.79 9.96875 11.515 8.97188 11.515ZM21.75 22.5713H18.6688V17.315C18.6688 15.7744 18.0344 15.3213 17.1281 15.3213C16.2219 15.3213 15.3156 16.0463 15.3156 17.4057V22.5713H12.2344V12.8744H15.1344V14.2338C15.4062 13.5994 16.4937 12.6025 18.0344 12.6025C19.7562 12.6025 21.5688 13.5994 21.5688 16.59V22.5713H21.75Z"
      fill="#1A202C"
    />
  </svg>
);

const Footer = () => {
  const Logo = "/../../../assets/Logo2.png";

  return (
    <footer className="footer" style={{ background: "#1d2a4d", padding: "64px 0 47px" }}>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sm={12}>
            <div className="foot-detail">
              <div className="foot-detail-logo">
                <Link href="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="foot-detail-text">
                <p>
                  At Wellness Services , we are here to help you on your journey to lasting
                  well-being.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <div className="foot-links">
              <div className="foot-links-links">
                <h4>Links</h4>
                <div className="f-links">
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/our-team">Our Team</Link>
                  <Link href="/telehealth">Telehealth</Link>
                  <Link href="/blog">Blog</Link>
                </div>
              </div>
              <div className="foot-links-links">
                <h4>Support</h4>
                <div className="f-links">
                  <Link href="/contact-us">Contact Us</Link>
                  <Link href="/faq">FAQ</Link>
                </div>
              </div>
              <div className="foot-links-links">
                <h4>Socials</h4>
                <div className="f-links">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>
                      <FacebookIcon />
                    </span>{" "}
                    <span>Facebook</span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>
                      <InstagramIcon />
                    </span>{" "}
                    <span>Instagram</span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>
                      <LinkedInIcon />
                    </span>{" "}
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>
                      <Xapp />
                    </span>{" "}
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} className="rd-foot">
            <div className="foot-links-links">
              <h4>Subscribe</h4>
              <p className="footer-subscribe-text1">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form action="" className="footer-subscribe">
                <input type="email" placeholder="Enter your email" />
                <button className="footer-subscribe-btn">Subscribe</button>
              </form>
              <p className="footer-subscribe-text2">
                By subscribing you agree to with our Privacy Policy and provide consent to receive
                updates from our company.
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="foot">
          <div className="terms">
            <Link href="/terms-of-service">
              Terms of Service
            </Link>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className="reserved">
            <p>© {new Date().getFullYear()} Wellness Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
