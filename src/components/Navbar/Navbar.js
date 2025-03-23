import React, { useState } from "react";
import NavbarItem from "./Navbar-Item";
import NavbarDropdown from "./Navbar-Dropdown";
import logoMini from "../../assets/images/Logo/FluentAir-logo-mini.webp";
import { Icons } from "../../assets/icons/icons";
import { IoMenu } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Ezt állísd ha alapból nyitva akarod kezdeni a menut.
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsDropdownOpen({});
  };

  const closeMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Online Tests menüpontok
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
          {/* Dashboard */}
          <NavbarItem
            to="/"
            label="Dashboard"
            icon={MdOutlineDashboard}
            closeMenu={closeMenu}
          />

          {/* Practice */}
          <NavbarItem
            to="/practice"
            label="Practice"
            icon={BsFillPatchQuestionFill}
            closeMenu={closeMenu}
          />
          {/* Online Tests */}
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
          <NavbarItem
            to="/questionbank-editor"
            label="Questionbank Editor"
            icon={Icons.GoTasklist}
            closeMenu={closeMenu}
          />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
