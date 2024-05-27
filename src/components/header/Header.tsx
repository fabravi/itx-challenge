import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Header</h1>
    </div>
  );
};
