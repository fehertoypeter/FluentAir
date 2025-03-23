import React, { useState } from "react";
import MessagePopup from "../../components/MessagePopup/MessagePopup";
import { Icons } from "../../assets/icons/icons";
import { userPrivateCollectionsBank } from "../../data/userLocalDatabase";
import "./privateCollections.css";

const PrivateCollection = ({ isOpen, onClose, questionId }) => {
  const [privateCollections, setPrivateCollections] = useState(
    userPrivateCollectionsBank
  ); // Store collections
  const [isCreating, setIsCreating] = useState(false); // Toggle display of the creation section
  const [newCollectionName, setNewCollectionName] = useState(""); // Name of the new collection
  const [newCollectionColor, setNewCollectionColor] = useState("#007BFF"); // Default color (blue)

  // Save a collection
  const handleSaveCollection = () => {
    if (newCollectionName.trim()) {
      const collectionExists = privateCollections.some(
        (collection) =>
          collection.name.toLowerCase() ===
          newCollectionName.trim().toLowerCase()
      );

      if (collectionExists) {
        window.showPopupMessage(
          "A collection with this name already exists. Please choose a different name.",
          8000,
          "#e83b51",
          "black"
        );
        return; // Exit without saving
      }

      const newCollection = {
        name: newCollectionName,
        color: newCollectionColor,
        items: [],
      };
      userPrivateCollectionsBank.push(newCollection); // Save to the global storage
      setPrivateCollections([...userPrivateCollectionsBank]); // Update the component
      setNewCollectionName("");
      setNewCollectionColor("#007BFF");
      setIsCreating(false);
    }
  };

  // Add or remove an item from a collection
  const handleToggleQuestionInCollection = (index) => {
    const updatedCollections = privateCollections.map((collection, i) => {
      if (i === index) {
        const isInCollection = collection.items.includes(questionId);
        return {
          ...collection,
          items: isInCollection
            ? collection.items.filter((id) => id !== questionId)
            : [...collection.items, questionId],
        };
      }
      return collection;
    });

    userPrivateCollectionsBank.length = 0; // Clear the array
    userPrivateCollectionsBank.push(...updatedCollections); // Refill with new values
    setPrivateCollections(updatedCollections); // Update the component
  };

  // Handle color selection
  const handleColorSelect = (color) => {
    setNewCollectionColor(color);
  };

  const colorOptions = [
    "#FF4D4D",
    "#FF6F00",
    "#FFCD57",
    "#2979FF",
    "#6200EA",
    "#D500F9",
  ];

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "open" : ""}`}
        onClick={() => {
          onClose();
          setIsCreating(false);
        }}
      ></div>

      <div className={`private-collection-container ${isOpen ? "open" : ""}`}>
        <MessagePopup />
        <div className="header">
          <h3>Question Collections</h3>
          <button className="modal-close-button" onClick={onClose}>
            <Icons.IoCloseOutline />
          </button>
        </div>

        <div className="private-collection-content">
          <div className="create-collection-button-container">
            <button
              className="create-collection-button"
              onClick={() => setIsCreating(!isCreating)}
            >
              <Icons.CiCirclePlus size={25} />
              <p>Create New Collection</p>
            </button>
          </div>

          <div
            className={`collection-creator ${isCreating ? "slide-down" : ""}`}
          >
            <input
              type="text"
              placeholder="Enter collection name"
              value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
            />
            <div className="color-picker">
              <label>Pick a color:</label>
              <div className="color-buttons">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    className="color-button"
                    onClick={() => handleColorSelect(color)}
                    style={{
                      backgroundColor:
                        newCollectionColor === color ? color : "white",
                    }}
                  >
                    <Icons.FaBookmark
                      color={newCollectionColor === color ? "white" : color}
                      size={20}
                    />
                  </button>
                ))}
              </div>
            </div>
            <button
              className="save-collection-button"
              onClick={handleSaveCollection}
            >
              Save Collection
            </button>
          </div>

          <div className={`collection-list ${isCreating ? "slide-down" : ""}`}>
            {privateCollections.map((collection, index) => (
              <div
                key={index}
                className="collection-item"
                style={
                  {
                    // borderLeft: `5px solid ${collection.color}`,
                  }
                }
                onClick={() => handleToggleQuestionInCollection(index)}
              >
                <div className="collection-itemleft-block">
                  {collection.items.includes(questionId) ? (
                    <Icons.GoBookmarkFill
                      size={22}
                      style={{ color: collection.color }} // Sets the icon color
                    />
                  ) : (
                    <Icons.GoBookmark
                      size={22}
                      style={{ color: collection.color }} // Sets the icon color
                    />
                  )}
                  <p className="collection-item-name">{collection.name}</p>
                  <p className="item-counter">({collection.items.length})</p>
                </div>
                <div className="collection-item-add-remove">
                  {collection.items.includes(questionId) ? (
                    <Icons.IoRemoveCircleOutline size={22} />
                  ) : (
                    <Icons.IoIosAddCircleOutline size={22} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateCollection;
