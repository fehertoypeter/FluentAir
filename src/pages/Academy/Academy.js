import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate importálása
import Card from "../../components/LearningComponents/Card";
import { cardData } from "../../components/LearningComponents/CardData";
import AcademyLoader from "../../components/Loader/AcademyLoader";
import "./Academy.css";

const Academy = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const navigate = useNavigate(); // useNavigate használata
  const { slug } = useParams(); // URL paraméter kiolvasása

  // Betöltjük a tartalmat az URL alapján, ha van slug
  useEffect(() => {
    if (slug) {
      const selectedDetail = cardData
        .flatMap((card) => card.details)
        .find((detail) => detail.name === slug);

      if (selectedDetail) {
        loadContent(selectedDetail);
      }
    }
  }, [slug]);

  // Tartalom betöltése
  const loadContent = async (detail) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // Szimulált betöltés
    // Dinamikus importálás a komponenshez
    const componentModule = await import(
      `./AcademyModules/${detail.component}`
    );
    setContent(React.createElement(componentModule.default));
    setLoading(false);
  };

  // Kártyára kattintás kezelése
  const handleCardClick = (cardId, detailName) => {
    navigate(`/academy/${detailName}`); // URL változtatása useNavigate-nel
  };

  return (
    <div className="academy-container">
      <div className="card-data-container">
        <div className="card-data-content">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              details={card.details}
              onClick={(detailName) => handleCardClick(card.id, detailName)}
            />
          ))}
        </div>
      </div>
      <div className="study-content-container">
        {loading ? <AcademyLoader /> : content}
      </div>
    </div>
  );
};

export default Academy;
