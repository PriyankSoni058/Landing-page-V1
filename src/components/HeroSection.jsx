import React from "react";
import Button from "./Button";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Get More Done with whitepace</h1>
      <p className="hero-description">
        Project management software that enables your teams to collaborate,
        plan, analyze and manage everyday tasks
      </p>
      <Button variant="primary" text="Try Whitepace free" icon="arrow-right" />
    </div>
    <img
      src="images/image-container.png"
      alt="Whitepace dashboard preview"
      className="hero-image"
    />
  </section>
);

export default HeroSection;
