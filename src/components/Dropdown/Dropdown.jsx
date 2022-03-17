import React from "react";

import { BsCheck } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import styles from "./Dropdown.module.css";

export const Dropdown = ({ list, setSelectedNode, selectedNode }) => {
  return (
    <div className={styles.dropdown}>
      <ul >
        {list.map((node) => {
          return (
            <TreeNode
              key={node.id}
              node={node}
              setSelectedNode={setSelectedNode}
              selectedNode={selectedNode}
            />
          );
        })}
      </ul>
      {selectedNode !== null ? (
        <div className={styles.selectionButtons}>
          {/* <button className={styles.checkButton}>
            <BsCheck />
          </button> */}
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

const TreeNode = ({ node, setSelectedNode, selectedNode }) => {
  const hasChildren = node.children.length !== 0;
  const isCurrentNode = selectedNode?.id === node.id

  const handleClick = () => {
    if (!hasChildren) setSelectedNode(node);
  };

  return (
    <li
      onClick={handleClick}
      className={isCurrentNode ? styles.selected : ""}
      style= {{
        color: !hasChildren && '#424242',
        fontSize: hasChildren ? '15px' : '20px' 
      }}
    >
      <div>
        {!hasChildren && (isCurrentNode ?  <AiFillStar /> : <AiOutlineStar /> )}
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
              />
            );
          })}
      </ul>
    </li>
  );
};
