import React from 'react';
import styles from './styles/CustomHead.css';
const CustomHead = ({
  children,
  type = 'h1',
  color = '#4d4d4d',
  marginTop = '30px',
}) => {
  return (
    <div className={styles[type]} style={{ color, marginTop }}>
      {children}
    </div>
  );
};

export default CustomHead;
