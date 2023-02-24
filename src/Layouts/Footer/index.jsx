import React from "react";
import Logo from "../../Assets/Images/LOGO.png";

import "../../Assets/Css/Font/font.css"
import "../../Assets/Css/Layouts/Footer/footer.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"

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