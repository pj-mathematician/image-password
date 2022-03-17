import React from "react";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ list, setSelectedNode }) => {
  return (
    <div className={styles.dropdown}>
      {list.map((node) => {
        return (
          <TreeNode
            key={node.id}
            node={node}
            setSelectedNode={setSelectedNode}
          />
        );
      })}
    </div>
  );
};

const TreeNode = ({ node, setSelectedNode }) => {
  const hasChildren = node.children.length !== 0;

  const handleClick = () => {
    if (!hasChildren) setSelectedNode(node);
  };
  console.log(setSelectedNode)

  return (
    <li onClick={handleClick}>
      {node?.name}
      <ul>
        {hasChildren &&
          node.children.map((subNode) => {
            return <TreeNode key={subNode.id} node={subNode} />;
          })}
      </ul>
    </li>
  );
};
