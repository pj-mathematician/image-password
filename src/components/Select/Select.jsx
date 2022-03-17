import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import styles from "./Select.module.css";

import { useState } from "react";

function Select({ list }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        <BsCaretDownFill
          className={styles.dropdownSvg}
          style={{
            transform: !open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
    </div>
  );
}

export default Select;
