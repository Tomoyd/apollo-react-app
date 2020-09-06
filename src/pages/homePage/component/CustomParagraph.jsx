import React from 'react';
import styles from './styles/CustomParagraph.css';
const CustomParagraph = ({
  marginTop = '16px',
  color = '#4d4d4d',
  children,
  fontWeight = 'normal',
}) => {
  return (
    <p className={styles.p} style={{ color, marginTop, fontWeight }}>
      {children}
    </p>
  );
};

export default CustomParagraph;
