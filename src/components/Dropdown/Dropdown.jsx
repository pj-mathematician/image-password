import React from "react";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import styles from "./Dropdown.module.css";


export const Dropdown = ({ list, setSelectedNode, selectedNode, open }) => {
  

  return (
    <div className={styles.dropdown + ' ' + (!open && styles.active)}>
      <ul>
        {list.map((node) => {
          return (
            <TreeNode
              key={node.id}
              node={node}
              setSelectedNode={setSelectedNode}
              selectedNode={selectedNode}
              address="/"
              open={open}
            />
          );
        })}
      </ul>
      {selectedNode !== null ? (
        <div className={styles.selectionButtons}>
          <button
            onClick={() => {
              setSelectedNode(null);
            }}
          >
            Clear Selection
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const TreeNode = ({ node, setSelectedNode, selectedNode, address, open }) => {
  const hasChildren = node.children.length !== 0;
  const isCurrentNode = selectedNode?.id === node.id;

  let newAddress = address + node.name + "/";

  const handleClick = () => {
    if (!hasChildren && !open) {
      setSelectedNode(node);
      console.log(address);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={isCurrentNode ? styles.selected : ""}
      style={{
        color: !hasChildren && "#424242",
        fontSize: hasChildren ? "15px" : "20px",
      }}
    >
      <div>
        {!hasChildren && (isCurrentNode ? <AiFillStar /> : <AiOutlineStar />)}
        {node?.name}
      </div>
      <ul>
        {hasChildren &&
          node.children.map((subNode) => {
            return (
              <TreeNode
                key={subNode.id}
                node={subNode}
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
                address={newAddress}
                open={open}
              />
            );
          })}
      </ul>
    </li>
  );
};
