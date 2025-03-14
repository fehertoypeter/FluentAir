import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavbarDropdown = ({
  Dropdownlabel,
  items,
  icon: Icon,
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownKey,
  toggleMenu,
  isMenuOpen,
}) => {
  const location = useLocation();
  const isActive = items.some((item) => location.pathname.includes(item.to));
  const isOpen = isDropdownOpen[dropdownKey] || false;

  const toggleDropdown = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    setIsDropdownOpen((prev) => ({
      ...prev,
      [dropdownKey]: !isOpen,
    }));
  };

  return (
    <li className="dropdown-menu">
      <div
        className={`dropdown-header ${isActive ? "active-link" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="header-content">
          {Icon && (
            <Icon
              className={`menuIcon ${
                isActive ? "active-link" : "inactive-link"
              }`}
            />
          )}
          <span>{Dropdownlabel}</span>
        </div>
        <div className="caret-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <div className={`dropdown-list-container ${isOpen ? "open" : ""}`}>
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className={`dropdown-item ${
                  location.pathname.includes(item.to)
                    ? "active-link"
                    : "inactive-link"
                }`}
                onClick={() => {
                  toggleDropdown(); // Nyitás/zárás logika
                  toggleMenu(); // Menü bezárása, ha nyitva van
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDropdown;
