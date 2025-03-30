import React, { useState, useEffect } from "react";
import NavbarItem from "./Navbar-Item";
import NavbarDropdown from "./Navbar-Dropdown";
import logoMini from "../../assets/images/Logo/FluentAir-logo-mini.webp";
import { Icons } from "../../assets/icons/icons";
import { IoMenu } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import "./Navbar.css";

import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsDropdownOpen({});
  };

  const closeMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult(true);
        const role = tokenResult.claims.role;
        setIsAdmin(role === "admin");
      }
    });

    return () => unsub();
  }, []);


  const OnlineTestsItems = [
    {
      to: "online-tests/number-pair-concentration",
      label: "Number Pair Concentration",
    },
    { to: "online-tests/acoustic-memory/", label: "Acoustic Memory" },
  ];

  return (
    <>
      <IoMenu className="mobile-menu-secondary-button" onClick={toggleMenu} />
      <nav className={`sidebar ${isMenuOpen ? "close" : ""}`}>
        <div className="logo-details">
          <img src={logoMini} alt="FluentAir Logo" className="logo_name" />
          <IoMenu className="iconMenuOpen bx bx-menu" onClick={toggleMenu} />
        </div>
        <ul className="nav-links">
          <NavbarItem
            to="/"
            label="Dashboard"
            icon={MdOutlineDashboard}
            closeMenu={closeMenu}
          />
          <NavbarItem
            to="/practice"
            label="Practice"
            icon={BsFillPatchQuestionFill}
            closeMenu={closeMenu}
          />
          <NavbarDropdown
            Dropdownlabel="Online Tests"
            items={OnlineTestsItems}
            icon={GoProjectRoadmap}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            dropdownKey="onlineTests"
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />

          {/* Only render if user is admin */}
          {isAdmin && (
            <NavbarItem
              to="/questionbank-editor"
              label="Questionbank Editor"
              icon={Icons.GoTasklist}
              closeMenu={closeMenu}
            />
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
