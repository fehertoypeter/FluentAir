import React, { useState, useRef, useEffect } from "react";
import "./AudioAnimation.css";

let animationInterval = null; // Az animáció időzítője

export const audioAnimation = (shouldAnimate) => {
  const event = new CustomEvent("audioAnimationControl", {
    detail: { shouldAnimate },
  });
  window.dispatchEvent(event);
};

const AudioAnimation = () => {
  const [bars, setBars] = useState(Array(15).fill(20)); // Kezdeti magasságok (20%)
  const isAnimating = useRef(false); // Az animáció állapotának követése

  useEffect(() => {
    const handleAnimationControl = (e) => {
      const { shouldAnimate } = e.detail;
      if (shouldAnimate) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    window.addEventListener("audioAnimationControl", handleAnimationControl);

    return () => {
      window.removeEventListener(
        "audioAnimationControl",
        handleAnimationControl
      );
    };
  });

  const startAnimation = () => {
    if (isAnimating.current) return; // Ne indítsuk el, ha már fut
    isAnimating.current = true;

    animationInterval = setInterval(() => {
      setBars(bars.map(() => Math.floor(Math.random() * 81) + 20)); // Random magasságok 20% és 100% között
    }, 200);
  };

  const stopAnimation = () => {
    if (!isAnimating.current) return; // Ne állítsuk le, ha nem fut
    isAnimating.current = false;

    clearInterval(animationInterval);
    setBars(Array(15).fill(20)); // Visszaállítás alapállapotba
  };

  return (
    <div className="audio-animation-container">
      <div className="audio-bars">
        {bars.map((height, index) => (
          <div
            key={index}
            className="audio-bar"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AudioAnimation;
