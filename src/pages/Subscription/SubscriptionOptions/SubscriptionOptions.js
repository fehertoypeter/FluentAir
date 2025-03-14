import React, { useState } from "react";
import SubscriptionOption from "../SubscriptionOption/SubscriptionOption";

import "./SubscriptionOptions.css";

function SubscriptionOptions() {
  const [selectedOption, setSelectedOption] = useState("yearly");

  const currentPlan = [
    {
      label: "Free Trial",
      description: "Most Economical",
      dueDate: "2024.12.26",
    },
  ];

  const options = [
    {
      label: "yearly",
      description: "Most Economical",
      price: "€1 / month",
      billed: "Billed for 12 months",
      savings: "Save €204",
    },
    {
      label: "6 - month",
      description: "Most Popular",
      price: "€2 / month",
      billed: "Billed for 6 months",
      savings: "Save €72",
    },
    {
      label: "3 - month",
      description: "Popular",
      price: "€3 / month",
      billed: "Billed for 3 months",
      savings: "Save €27",
    },
    {
      label: "monthly",
      description: "",
      price: "€4 / month",
      billed: "Billed for 1 month",
      savings: "Basic Plan",
    },
  ];

  const handleBuyClick = () => {
    console.log(`Selected subscription: ${selectedOption}`);
    // További logika, pl. fizetési folyamat kezdeményezése
  };

  return (
    <div className="content-container">
      <div className="subscription-container">
        <p>Your current plan</p>
        <div>
          <div className="subscription-options">
            {currentPlan.map((currentPlan) => (
              <SubscriptionOption
                label={currentPlan.label}
                dueDate={currentPlan.dueDate}
              />
            ))}
          </div>
        </div>
        <p>Choose your plan</p>
        <div className="subscription-options">
          {options.map((option) => (
            <SubscriptionOption
              key={option.label}
              label={option.label}
              description={option.description}
              price={option.price}
              billed={option.billed}
              savings={option.savings}
              isSelected={selectedOption === option.label}
              onSelect={() => setSelectedOption(option.label)}
            />
          ))}
        </div>
        <button
          type="button"
          id={`buy_${selectedOption}`}
          className="buy-button"
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default SubscriptionOptions;
