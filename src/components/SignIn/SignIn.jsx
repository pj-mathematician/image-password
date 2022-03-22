import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import ImageGrid from "../ImageGrid";

import styles from "./this.module.css";

export const SignIn = () => {
  // const server = "http://127.0.0.1:5000";
  const server = "http://75ca-2405-204-108d-3956-c087-e879-af5c-44e9.ngrok.io";

  const [list, setList] = useState(null);

  const [imageList, setImageList] = useState(null);

  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [username, setUsername] = useState("");

  const [passwordErr, setPasswordErr] = useState("");

  const usernameErr = "Enter a valid username";
  const nodeErr = "Select a category";
  const lengthErr = "At least 3 images should be selected";
  const emailErr = "Enter a valid email";

  const generateImages = () => {
    if (!username) {
      setPasswordErr(usernameErr);
      return;
    }

    if (!selectedNode) {
      setPasswordErr(nodeErr);
      return;
    }

    if (!email) {
      setPasswordErr(emailErr);
      return;
    }

    fetch(`${server}/images/${selectedNode[1].address}`)
      .then((res) => res.json())
      .then((data) => setImageList(data));

    setPasswordErr("");
  };

  useEffect(() => {
    fetch(`${server}/images2`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const handleSignIn = () => {
    if (selectedImages.length < 3) {
      setPasswordErr(lengthErr);
      return;
    }

    const user = {
      username,
      email,
      password: selectedImages.join(" "),
    };

    fetch(`${server}/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        console.log("Success");
        setUsername("");
        setSelectedNode(null);
        setSelectedImages([]);
        setPasswordErr("");
      } else if (res.status === 401) {
        setPasswordErr("Either username or password is incorrect");
      }
    });
  };

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className={styles.selectGroup}>
          <label htmlFor="category">Category: </label>
          <Dropdown list={list} val={selectedNode} setVal={setSelectedNode} />
        </div>
        <div className={styles.surroundDiv}>
          <button onClick={generateImages} className={styles.passwordGen}>
            Generate Image Grid
          </button>
        </div>
      </div>
      <span className={styles.error}> {passwordErr} </span>

      <ImageGrid
        imageList={imageList}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
      <div className={styles.surroundDiv}>
        <button onClick={handleSignIn} className={styles.signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
