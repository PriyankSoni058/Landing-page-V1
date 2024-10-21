import React from "react";
import Button from "./Button";

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular,
}) => (
  <div className={`pricing-card ${isPopular ? "pricing-card-popular" : ""}`}>
    <h3 className="pricing-card-title">{title}</h3>
    <p className="pricing-card-price">{price}</p>
    <p className="pricing-card-description">{description}</p>
    <ul className="pricing-card-features">
      {features.map((feature, index) => (
        <li key={index} className="pricing-card-feature">
          <img
            src={isPopular ? "images/yellowtick.png" : "images/icon.png"}
            alt=""
            className="feature-icon"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button variant={isPopular ? "primary" : "secondary"} text={buttonText} />
  </div>
);

export default PricingCard;
