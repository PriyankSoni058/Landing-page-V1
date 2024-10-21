import React from "react";

const navigationItems = [
  {
    text: "Products",
    icon: "images/vector.png",
  },
  {
    text: "Solutions",
    icon: "images/vector.png",
  },
  {
    text: "Resources",
    icon: "images/vector.png",
  },
  {
    text: "Pricing",
    icon: "images/vector.png",
  },
];

const Navigation = ({ isOpen }) => (
  <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
    {navigationItems.map((item, index) => (
      <div key={index} className="nav-item">
        <span className="nav-text">{item.text}</span>
        <img
          src={item.icon}
          alt={`${item.text} icon`}
          className="nav-icon"
        />{" "}
      </div>
    ))}
  </nav>
);

export default Navigation;
