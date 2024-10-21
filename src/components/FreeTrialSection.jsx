import React from "react";
import Button from "./Button";

const FreeTrialSection = () => (
  <section className="free-trial-section">
    <h2 className="free-trial-title">Try Whitepace today</h2>
    <p className="free-trial-description">
      Get started for free.
      <br />
      Add your whole team as your needs grow.
    </p>
    <div className="button-container">
      <Button variant="primary" text="Try Taskey free" icon="arrow-right" />
    </div>{" "}
    <a href="#" className="free-trial-link">
      On a big team? Contact sales
    </a>
    <div className="app-icons">
      <img
        src="images/apple-black-logo.png"
        alt="App Store"
        className="app-icon"
      />
      <img src="images/windows.png" alt="Google Play" className="app-icon" />
      <img src="images/android.png" alt="Web App" className="app-icon" />
    </div>
  </section>
);

export default FreeTrialSection;
