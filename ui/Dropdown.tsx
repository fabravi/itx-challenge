"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.scss";

type DropdownProps = {
  value: any;
  items: { value: any; label: string }[];
};

export const Dropdown = ({
  value: valueInput,
  items,
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({ label: valueInput });
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleOpen() {
    setOpen(!open);
  }

  useEffect(() => {
    function close(e: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("click", close);
    }

    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className={styles.dropdown} {...props}>
      <button onClick={toggleOpen} className={styles["dropdown-button"]}>
        {value.label}{" "}
        <span
          className={`${open ? styles["arrow-up"] : styles["arrow-down"]}`}
        ></span>
      </button>
      <ul
        onClick={() => setOpen(false)}
        className={`${styles["dropdown-list"]} ${
          open ? styles["dropdown-list-open"] : ""
        }`}
      >
        {items.map((item) => (
          <li key={item.value} className={styles["dropdown-list-item"]}>
            <button
              className={styles["dropdown-item"]}
              onClick={() => setValue(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
