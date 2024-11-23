import PropTypes from "prop-types";
import Link from "next/link";

const NavBarLink = ({ link, linkTitle, showLine }) => {
  return (
    <div className="navbarLink">
      <Link href={link} className={({ isActive }) => (isActive ? "link active" : "link")}>
        {linkTitle}
        {showLine && (
          <hr style={{ border: "0.5px solid #1D2A4D", width: "100%", marginTop: "15px" }} />
        )}
      </Link>
    </div>
  );
};

NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  showLine: PropTypes.bool,
};

export default NavBarLink;
