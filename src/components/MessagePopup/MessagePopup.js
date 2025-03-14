import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import "./MessagePopup.css";

const MessagePopup = () => {
  const [messages, setMessages] = useState([]); // Az üzenetek tömbje

  const showMessage = (
    msg,
    timeout,
    color = "#e83b51",
    textcolor = "white"
  ) => {
    // Szín hozzáadása, alapértelmezett értéke piros
    const newMessage = {
      id: Date.now(), // Egyedi azonosító a popupoknak
      text: msg,
      visible: true,
      color: color, // Szín tárolása
      textcolor: textcolor,
    };

    // Hozzáadjuk az új üzenetet
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Az üzenet eltűnését követő időzítő
    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === newMessage.id
            ? { ...message, visible: false }
            : message
        )
      );
      // Az üzenet eltávolítása a kódból 1 másodperccel az eltűnés után (lehetővé téve az animáció futását)
      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== newMessage.id)
        );
      }, 400); // A második setTimeout a popup eltávolításához szükséges időt ad a kivonáshoz
    }, timeout);
  };

  // Globálisan elérhető függvény, amit a szülő komponens hívhat
  window.showPopupMessage = showMessage;

  return (
    <div>
      {/* A popupok listája */}
      <div className="popup-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-popup ${
              message.visible ? "popupVisible" : "popupHidden"
            }`}
            style={{ backgroundColor: message.color, color: message.textcolor }} // Szín beállítása
          >
            <div className="message-popup-icon">
              <AiOutlineExclamationCircle />
            </div>

            <div>
              <p className="popup-message">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// használat: indow.showPopupMessage("Oho - Let's include at least 1 maybe :)", 3000, "#77DD77", "black" );

export default MessagePopup;
