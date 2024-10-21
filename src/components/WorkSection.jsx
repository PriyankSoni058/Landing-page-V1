import React from "react";
import Button from "./Button";

const WorkSection = () => (
  <section className="work-section">
    <h2 className="work-title">Your work, everywhere you are</h2>
    <p className="work-description">
      Access your notes from your computer, phone or tablet by synchronising
      with various services, including whitepace, Dropbox and OneDrive. The app
      is available on Windows, macOS, Linux, Android and iOS. A terminal app is
      also available!
    </p>
    <div className="button-container">
      <Button variant="primary" text="Try Taskey" icon="arrow-right" />
    </div>
  </section>
);

export default WorkSection;
