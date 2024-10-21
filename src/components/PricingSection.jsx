import React from "react";
import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    title: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    title: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
];

const PricingSection = () => (
  <section className="pricing-section">
    <h2 className="pricing-title">Choose Your Plan</h2>
    <p className="pricing-description">
      Whether you want to get organized, keep your personal life on track, or
      boost workplace productivity, Evernote has the right plan for you.
    </p>
    <div className="pricing-cards">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  </section>
);

export default PricingSection;
