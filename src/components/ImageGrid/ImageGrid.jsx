import React from "react";

import styles from "ImageGrid.module.css";
const { parent, heading, imageGrid, confirmSection, block } = styles;

export const ImageGrid = ({ imageList }) => {

  return (
    <div className={parent}>
      <div className={heading}></div>
      <div className={imageGrid}>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
        <div className={block}></div>
      </div>
      <div className={confirmSection}></div>
    </div>
  );
};
