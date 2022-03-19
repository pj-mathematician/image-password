import React, { useState, useRef } from "react";

import { BsFillRecordCircleFill as Circle } from "react-icons/bs";
import Dropdown from "../Dropdown";
import SignIn from "../SignIn";

import styles from "./Demo.module.css";

export default function Demo() {
  const [selectedNode, setSelectedNode] = useState(null);

  const usernameRef = useRef();

  const handleSubmit = () => {

  }

  return (
    <div>
      <div className={styles.heading}>
        <Circle />
        <h1>Demo</h1>
      </div>


      <SignIn />
    </div>
  );
}
