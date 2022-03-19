import React, { useState } from "react";
import { BsCaretDownFill, BsStarFill } from "react-icons/bs";

import styles from "./Dropdown.module.css";

import ClickOutsideDetector from "../../helper/OutsideClickDetect";

export const Dropdown = ({ val, setVal, list }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((_) => !_);
  };

  return (
    <ClickOutsideDetector
      listen
      onClickOutside={() => {
        setOpen(false);
      }}
    >
      <div className={styles.dropdown}>
        <button className={styles.toggleButton} onClick={handleClick}>
          {val && val[1].name} <BsCaretDownFill />
        </button>
        {open && (
          <div className={styles.dropdownMenu}>
            <ul>
              {Object.entries(list).map(([id, node]) => {
                return (
                  <TreeNode
                    entry={[id, node]}
                    key={id}
                    selectedNode={val}
                    setSelectedNode={setVal}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickOutsideDetector>
  );
};

const TreeNode = ({ entry, selectedNode, setSelectedNode }) => {
  const [id, node] = entry;

  const hasChildren = node.children !== null;
  const isSelectedNode = id === (selectedNode && selectedNode[0]);

  const handleClick = () => {
    if (hasChildren) return;
    setSelectedNode(entry);
  };

  return (
    <li>
      {hasChildren ? (
        <>
          <span className={styles.parentNode}>{node.name}</span>
          <ul>
            {Object.entries(node.children).map(([sub_id, sub_node]) => {
              return (
                <TreeNode
                  entry={[sub_id, sub_node]}
                  key={sub_id}
                  selectedNode={selectedNode}
                  setSelectedNode={setSelectedNode}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <button
          style={{
            color: isSelectedNode ? "#039be5" : "",
          }}
          onClick={handleClick}
          className={styles.optionNode}
        >
          <div>{isSelectedNode && <BsStarFill />}</div>
          <div>{node.name}</div>
        </button>
      )}
    </li>
  );
};
