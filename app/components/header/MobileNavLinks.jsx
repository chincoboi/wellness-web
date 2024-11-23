import React from "react";
import NavBarLink from "./NavBarLink";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MobileNavLinks = ({ toggle }) => {

  return (
    <aside className={toggle ? "mobile-nav-links active" : "mobile-nav-links"}>
      <div className="m-menu">
        <h2 className="m-menu-text">Menu</h2>
        <CloseOutlinedIcon className="m-menu-cancel" />

      </div>
      <div className="m-links">
        <NavBarLink link="/" linkTitle="Home" showLine />
        <NavBarLink link="/services" linkTitle="Services" showLine />
        <NavBarLink link="/our-team" linkTitle="Our Team" showLine />
        <NavBarLink link="/telehealth" linkTitle="Telehealth" showLine />
        <NavBarLink link="/blog" linkTitle="Blog" showLine />
        <NavBarLink link="/contact-us" linkTitle="Contact Us" showLine />
        <NavBarLink link="/faq" linkTitle="FAQ" />
      </div>
    </aside>
  );
};

export default MobileNavLinks;
