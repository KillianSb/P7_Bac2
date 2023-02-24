import { React, useState } from "react";
import Image from '../../Assets/Images/DropdownLogo.png'

function Dropdown({ Texte, principes, index }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  let toggleClassCheck = open ? "active" : null;
  return (
    <>
      <div className="Dropdown-container" key={{ index }}>
        <p className="Dropdown-p">{Texte}</p>
        <img
          alt="Flèche"
          src={Image}
          onClick={handleOpen}
          className={toggleClassCheck}
        />
      </div>
      {open ? (
        <div className="dropdownDiv" key={index}>
          {principes}
        </div>
      ) : null}
    </>
  );
}

export default Dropdown