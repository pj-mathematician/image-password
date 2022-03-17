import { BsCaretDownFill } from "react-icons/bs";
import styles from "./Select.module.css";

import { useState } from "react";
import Dropdown from "../Dropdown";

function Select({ list }) {
  const [open, setOpen] = useState(false);

  const [selectedNode, setSelectedNode] = useState(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.selectGroup}>
      {selectedNode?.name}
      <button className={styles.button} onClick={handleClick}>
        <BsCaretDownFill
          className={styles.dropdownSvg}
          style={{
            transform: !open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {!open && (
        <Dropdown
          list={list}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
      )}
    </div>
  );
}

export default Select;
