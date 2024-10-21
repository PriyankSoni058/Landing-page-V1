import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Button = ({ variant, text, icon }) => (
  <button className={`btn btn-${variant}`}>
    <span className="btn-text">{text}</span>
    {icon === "arrow-right" && <ArrowForwardIcon className="btn-icon" />}
  </button>
);

export default Button;
