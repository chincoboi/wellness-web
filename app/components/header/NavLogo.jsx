import React from "react"
import Link from "next/link";

const NavLogo = ({ img }) => {
  return (
    <div className="navbarLogo">
      <Link href={"/"}>
        <img
          src={img}
          className="navbarLogo-img"
          alt="Wellness Logo"
          aria-label="Wellness Logo"
        />
      </Link>
    </div>
  );
};

export default NavLogo;