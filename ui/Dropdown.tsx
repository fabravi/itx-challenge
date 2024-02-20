"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.scss";

type DropdownProps<T> = {
  value: any;
  items: T[];
  key: keyof T;
  label: keyof T;
  onSelect: (value: T) => void;
};

export const Dropdown = <T,>({
  value: valueInput,
  items,
  key,
  label,
  onSelect,
  ...props
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(valueInput);
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

  const onClick = (item: T) => {
    setValue(item);
    onSelect(item);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown} {...props}>
      <button onClick={toggleOpen} className={styles["dropdown-button"]}>
        {value[label]}
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
          <li
            key={item[key] as string}
            className={styles["dropdown-list-item"]}
          >
            <button
              className={styles["dropdown-item"]}
              onClick={() => onClick(item)}
            >
              {item[label] as string}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
