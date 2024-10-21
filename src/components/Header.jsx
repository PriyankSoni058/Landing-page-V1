import React, { useState } from "react";
import Navigation from "./Navigation";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`header-content ${menuOpen ? "open" : ""}`}>
        <Navigation isOpen={menuOpen} />
        <div className={`header-buttons ${menuOpen ? "open" : ""}`}>
          <Button variant="secondary" text="Login" />
          <Button
            variant="primary"
            text="Try Whitepace free"
            icon="arrow-right"
          />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-buttons">
          <Navigation isOpen={menuOpen} />
          <Button variant="secondary" text="Login" />
          <Button
            variant="primary"
            text="Try Whitepace free"
            icon="arrow-right"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
