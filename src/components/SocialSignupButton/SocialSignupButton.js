import React from "react";
import "./SocialSignUpButton.css";

const SocialSignUpButton = ({
  onClick,
  icon: Icon,
  text,
  color,
  className,
}) => {
  return (
    <button
      className={`SocialSignUpButton ${className}`}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      {text}
    </button>
  );
};

export default SocialSignUpButton;
