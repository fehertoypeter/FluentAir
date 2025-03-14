// Navbar-Item.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarItem = ({ to, label, icon: Icon, closeMenu }) => {
  const location = useLocation();

  return (
    <li className="menuLine">
      <Link
        onClick={() => {
          closeMenu(); // Menü bezárása, ha nyitva van
        }}
        className="link_name"
        to={to}
        style={{ color: location.pathname === to ? "#f5ab00" : "white" }}
      >
        {Icon && (
          <Icon
            className="menuIcon"
            style={{ color: location.pathname === to ? "#f5ab00" : "white" }}
          />
        )}{" "}
        {/* If there is icon then render it... */}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;
