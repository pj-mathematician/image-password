import React from "react";
import { useState } from "react";
import Dropdown from "../Dropdown";

import styles from "./this.module.css";

export const SignIn = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username: </label>
          <input type="text" />
        </div>
        <div className={styles.selectGroup}>
          <label htmlFor="category">Category: </label>
          <Dropdown list={list} val={selectedNode} setVal={setSelectedNode} />
        </div>
        <div className={styles.surroundDiv}>
          <button className={styles.passwordGen}>Generate Image Grid</button>
        </div>
      </div>
    </div>
  );
};

let list = {
  1: {
    name: "Node 1",
    address: "1",
    children: {
      11: {
        name: "Sub Node 11",
        address: "1/11",
        children: {
          111: {
            name: "Sub Sub Node 111",
            address: "1/11/111",
            children: null,
          },
        },
      },
      12: {
        name: "Sub Node 2",
        address: "1/12",
        children: {
          121: {
            name: "Sub Sub Node 121",
            address: "1/12/121",
            children: null,
          },
        },
      },
    },
  },
  2: {
    name: "Node 2",
    address: "2",
    children: {
      21: {
        name: "Sub Node 2",
        address: "2/21",
        children: null,
      },
    },
  },
};


imageList = []