import React from "react";
import Logo from "../../assets/images/LOGOFooter.jpg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container">
          <img src={Logo} alt="logo Kasa blanc"></img>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer