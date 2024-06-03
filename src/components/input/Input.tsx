import styles from './input.module.scss';

type InputProps = {
  placeholder: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, label, onChange }: InputProps) => {
  return (
    <div className={styles.input}>
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        aria-label={label}
      />
    </div>
  );
};
