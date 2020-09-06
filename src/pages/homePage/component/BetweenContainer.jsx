import React from 'react';
import styles from '../index.css';
const BetweenConatiner = ({ children }) => {
  return <div className={styles.betweenContainer}>{children}</div>;
};

export default BetweenConatiner;
