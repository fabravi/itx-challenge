import styles from './input.module.scss';

type InputProps = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <div className={styles.input}>
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        aria-label={placeholder}
      />
    </div>
  );
};
