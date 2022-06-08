import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.scss";

const Header = () => {
  return (
    <div className="navigasi">
      <ul className="navbarTop">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <li className="navbarItem">Home</li>
        </Link>
        <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
          <li className="navbarItem">About</li>
        </Link>
        <Link to="/Review" style={{ color: "white", textDecoration: "none" }}>
          <li className="navbarItem">Review</li>
        </Link>
        <Link
          to="/ListMember"
          style={{ color: "white", textDecoration: "none" }}
        >
          <li className="navbarItem">List Member</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
