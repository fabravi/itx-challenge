import styles from "./button.module.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
  [x: string]: any;
};

export const Button = ({ label, onClick, ...rest }: ButtonProps) => (
  <button onClick={onClick} className={styles.button} {...rest}>
    {label}
  </button>
);
