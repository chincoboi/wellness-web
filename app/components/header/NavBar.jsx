"use client";

import NavLogo from "./NavLogo";
import NavLinks from "./NavBarLinks";
import MobileNavLinks from "./MobileNavLinks";
import NavButton from "./NavButton";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const Logo = "/assets/Logo.png";

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      if (!e.target.closest("#nav-burg") || e.target.closest("#nav-burg")) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-cont">
        <NavLogo img={Logo} />
        <div className="linkBut">
          <NavLinks />
          <MenuOutlinedIcon
            id="nav-burg"
            className="nav-burger"
            fontSize="large"
            onClick={(e) => {
              e.stopPropagation();
              setToggle((prev) => !prev);
            }}
          />
          <MobileNavLinks toggle={toggle} />
          <Link href={`/contact-us`}>
            <NavButton title="Schedule Appointment Today" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
