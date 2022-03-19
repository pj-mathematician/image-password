import React from "react";

import {BsCardImage} from 'react-icons/bs'

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.title}>
        <BsCardImage />
        <h1>Image Password Prototype</h1>
      </div>
    </nav>
  );
};
