import React, { useState } from "react";
import { Icons } from "../../assets/images/icons/icons";
import { useParams } from "react-router-dom"; // URL paraméter kiolvasásához
import "./Card.css";

const Card = ({ title, subtitle, description, details, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams(); // URL paraméter kiolvasása

  const toggleCard = (event) => {
    // Csak akkor csukódjon össze, ha nem a details-re kattintottunk
    if (!event.target.closest(".additional-content")) {
      setIsOpen(!isOpen);
    }
  };

  const handleDetailClick = (detailName) => {
    onClick(detailName); // Az onClick függvény meghívása a detail.name-nel
  };

  return (
    <div className={`card ${isOpen ? "open" : ""}`} onClick={toggleCard}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>{description}</h5>
      <div className="additional-content">
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <p
                onClick={() => handleDetailClick(detail.name)}
                className={slug === detail.name ? "active-detail" : ""}
              >
                {detail.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="arrow">
        {isOpen ? <Icons.IoIosArrowDropup /> : <Icons.IoIosArrowDropdown />}
      </div>
    </div>
  );
};

export default Card;
