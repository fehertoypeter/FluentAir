import React from "react";
import Card from "../../components/LearningComponents/Card";
import { cardData } from "../../components/LearningComponents/CardData";

import "./TestPage.css";

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="ttcontiner">
        <div className="card-data-container">
          {cardData.map((card) => (
            <Card
              key={card.id} // Egyedi kulcs a listához
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              details={card.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
