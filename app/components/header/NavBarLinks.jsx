import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="navLinks">
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/services" ? "active" : ""}`}
          href="/services"
        >
          Services
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/our-team" ? "active" : ""}`}
          href="/our-team"
        >
          Our Team
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/telehealth" ? "active" : ""}`}
          href="/telehealth"
        >
          Telehealth
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/blog" ? "active" : ""}`}
          href="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/contact-us" ? "active" : ""}`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
      <div className="navbarLink">
        <Link
          className={`link ${pathname === "/faq" ? "active" : ""}`}
          href="/faq"
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default NavBarLinks;
