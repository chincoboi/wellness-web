import React from "react";

const NavButton = ({ title, onClick }) => {
  return (
    <div className="navbarBut" onClick={onClick}>
      <button type="button">{title}</button>
    </div>
  );
};

export default NavButton;
