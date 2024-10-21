import React from "react";

const sponsors = [
  {
    name: "Apple",
    icon: "images/apple.png",
  },
  {
    name: "Microsoft",
    icon: "images/microsoft.png",
  },
  {
    name: "Slack",
    icon: "images/slack.png",
  },
  {
    name: "Google",
    icon: "images/google.png",
  },
];

const SponsorsSection = () => (
  <section className="sponsors-section">
    <h2 className="sponsors-title">Our Sponsors</h2>
    <div className="sponsors-list">
      {sponsors.map((sponsor, index) => (
        <img
          key={index}
          src={sponsor.icon}
          alt={`${sponsor.name} logo`}
          className="sponsor-logo"
        />
      ))}
    </div>
  </section>
);

export default SponsorsSection;
