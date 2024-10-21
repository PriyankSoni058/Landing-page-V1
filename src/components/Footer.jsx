import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Customer stories"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides & tutorials", "Help center"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Media kit"],
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
        <Logo />
        <p className="footer-description">
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>
      {footerLinks.map((section, index) => (
        <div key={index} className="footer-links">
          <h3 className="footer-links-title">{section.title}</h3>
          <ul className="footer-links-list">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer-cta">
        <h3 className="footer-cta-title">Try It Today</h3>
        <p className="footer-cta-description">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <Button variant="primary" text="Start today" icon="arrow-right" />
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-legal">
        <div className="language-selector">
          <img src="images/language.png" alt="" className="language-icon" />
          <span className="language-text">English</span>
          <img src="images/vector.png" alt="" />
        </div>
        <a href="#" className="footer-legal-link">
          Terms & privacy
        </a>
        <a href="#" className="footer-legal-link">
          Security
        </a>
        <a href="#" className="footer-legal-link">
          Status
        </a>
        <span className="footer-copyright">©2021 Whitepace LLC.</span>
      </div>
      <div className="footer-social">
        <a href="#" className="social-link">
          <img
            src="images/facebook.png"
            alt="Facebook"
            className="social-icon"
          />
        </a>
        <a href="#" className="social-link">
          <img src="images/twitter.png" alt="Twitter" className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <img
            src="images/linkedin.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
