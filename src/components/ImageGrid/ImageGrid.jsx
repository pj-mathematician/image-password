import React, { useState } from "react";

import styles from "./ImageGrid.module.css";
const { parent, heading, imageGrid, confirmSection, block, selected } = styles;

export const ImageGrid = ({ imageList }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const imageKeys = Object.keys(imageList);
  const [shuffledImageKeys, setShuffledImageKeys] = useState(() =>
    imageKeys.sort((a, b) => 0.5 - Math.random())
  );

  const clear = () => {
    setSelectedImages([]);
  };

  const handleSubmit = () => {};

  return (
    <div className={parent}>
      <div className={heading}>Select Images</div>
      <div className={imageGrid}>
        {/* {Object.entries(imageList).map(([id, image]) => { */}
        {shuffledImageKeys.map((id) => {
          const handleClick = () => {
            setSelectedImages((curr) => {
              if (curr.includes(id)) {
                let newArr = curr.filter((item) => item !== id);
                return newArr;
              } else {
                return [...curr, id];
              }
            });
          };

          const isSelected = selectedImages.includes(id);
          const index = isSelected ? selectedImages.indexOf(id) : null;

          return (
            <div
              data-index={isSelected ? index + 1 : ""}
              id={id}
              key={id}
              onClick={handleClick}
              className={`${block} ${isSelected ? selected : ""}`}
            >
              <img src={imageList[id]} alt="" />
            </div>
          );
        })}
      </div>
      <div className={confirmSection}>
        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};
