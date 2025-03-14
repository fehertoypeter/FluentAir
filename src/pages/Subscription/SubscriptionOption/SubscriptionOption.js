import React from "react";
import "./SubscriptionOption.css";

function SubscriptionOption({
  dueDate,
  label,
  description,
  price,
  billed,
  savings,
  isSelected,
  onSelect,
}) {
  return (
    <label className={`subscription-option ${isSelected ? "selected" : ""}`}>
      <input
        type="radio"
        name="SubscriptionItem"
        value={label}
        checked={isSelected}
        onChange={onSelect}
      />
      <div className="subscription-details">
        <div className="container">
          <p className="subscription-label">{label}</p>
          {savings && <p className="savings-tag">{savings}</p>}
        </div>
        <div className="price-info">
          <p className="monthly-price">{price}</p>
          <p className="billed-info">{billed}</p>
          {dueDate && <p className="due-date">Due date: {dueDate}</p>}
        </div>
      </div>
    </label>
  );
}

export default SubscriptionOption;
