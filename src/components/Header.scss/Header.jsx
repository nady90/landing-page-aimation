import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header home-page-header">
      <div className="logo">
        <span>Perfect Vacation</span>
      </div>
      <div className="hamburger-menu">
        <svg
          width="50"
          height="30"
          viewBox="0 0 107 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 71H107V59.1667H0V71ZM0 41.4167H107V29.5833H0V41.4167ZM0 0V11.8333H107V0H0Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
