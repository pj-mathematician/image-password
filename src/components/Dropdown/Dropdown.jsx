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
    <div className={styles.dropdown}>
      <button className={styles.toggleButton} onClick={handleClick}>
        <BsCaretDownFill />
      </button>
      {open && (
        <ClickOutsideDetector
          listen
          onClickOutside = {() => {setOpen(false)}}
        >
          <div className={styles.dropdownMenu}>
            <ul>
              {list?.map((node) => {
                return (
                  <TreeNode
                    node={node}
                    key={node.id}
                    selectedNode={val}
                    setSelectedNode={setVal}
                  />
                );
              })}
            </ul>
          </div>
        </ClickOutsideDetector>
      )}
    </div>
  );
};

const TreeNode = ({ node, selectedNode, setSelectedNode }) => {
  const hasChildren = node.children.length !== 0;
  const isSelectedNode = node.id === selectedNode?.id;

  const handleClick = () => {
    if (hasChildren) return;
    setSelectedNode(node);
  };

  return (
    <li>
      {hasChildren ? (
        <>
          <span className={styles.parentNode}>{node.name}</span>
          <ul>
            {node.children.map((subNode) => (
              <TreeNode
                node={subNode}
                key={subNode.id}
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
              />
            ))}
          </ul>
        </>
      ) : (
        <button
          style={{
            color: isSelectedNode ? "blue" : "",
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
