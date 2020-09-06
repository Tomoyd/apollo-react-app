import React from 'react';
import styles from './styles/BlueText.css';
const BlueText = ({
  children,
  marginTop = '14px',
  marginLeft = '0',
  fontSize = '20px',
}) => {
  return (
    <span className={styles.text} style={{ marginTop, marginLeft, fontSize }}>
      {children}
    </span>
  );
};

export default BlueText;
