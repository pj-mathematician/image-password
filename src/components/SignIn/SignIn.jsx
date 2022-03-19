import React from "react";
import { useState } from "react";
import Dropdown from "../Dropdown";
import ImageGrid from "../ImageGrid";

import styles from "./this.module.css";

export const SignIn = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [username, setUsername] = useState("");

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
          <button className={styles.passwordGen}>Generate Image Grid</button>
        </div>
      </div>
      <ImageGrid imageList={imageList} usernameRef />
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

let imageList = {
  i1: "https://cdn.discordapp.com/attachments/751667312825729074/954705082824421376/unknown.png",
  i2: "https://cdn.discordapp.com/attachments/751667312825729074/954705146028380170/unknown.png",
  i3: "https://cdn.discordapp.com/attachments/751667312825729074/954705201724530698/unknown.png",
  i4: "https://cdn.discordapp.com/attachments/751667312825729074/954705249212461096/unknown.png",
  i5: "https://cdn.discordapp.com/attachments/751667312825729074/954705290954158120/unknown.png",
  i6: "https://cdn.discordapp.com/attachments/751667312825729074/954705365608579112/unknown.png",
  i7: "https://cdn.discordapp.com/attachments/751667312825729074/954705431643684925/unknown.png",
  i8: "https://cdn.discordapp.com/attachments/751667312825729074/954705476656980018/unknown.png",
  i9: "https://cdn.discordapp.com/attachments/751667312825729074/954703845907378176/unknown.png",
};
