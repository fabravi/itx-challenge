import styles from './input.module.scss';

type InputProps = {
  placeholder: string;
};

export const Input = ({ placeholder }: InputProps) => {
  return (
    <div className={styles['input']}>
      <span className="material-symbols-outlined">search</span>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
