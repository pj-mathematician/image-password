import React, { useState } from "react";

import { BsFillRecordCircleFill as Circle } from "react-icons/bs";
import Dropdown from "../Dropdown";

import styles from "./Demo.module.css";

const list = [
  {
    name: "Node 1",
    id: 1,
    children: [
      {
        name: "Sub Node 11",
        id: 11,
        children: [
          {
            name: "Sub Sub Node 111",
            id: 111,
            children: [],
          },
        ],
      },
      {
        name: "Sub Node 2",
        id: 12,
        children: [
          {
            name: "Sub Sub Node 121",
            id: 121,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "Node 2",
    id: 2,
    children: [
      {
        name: "Sub Node 2",
        id: 21,
        children: [],
      },
    ],
  },
];

export default function Demo() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div>
      <div className={styles.heading}>
        <Circle />
        <h1>Demo</h1>
      </div>

      <div className={styles.signIn}>
        <div className={styles.selection}>
          <div>
            Select Node: <span>{selectedNode?.name}</span>
          </div>
          <div>
            <Dropdown val={selectedNode} setVal={setSelectedNode} list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}
