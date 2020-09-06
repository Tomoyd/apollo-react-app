import React from 'react';
import useReduxData from '../../hooks/useRedux';
import styles from './index.css';

const Index = () => {
  const [value, setReduxData] = useReduxData('test');
  const setData = (val) => {
    setReduxData(val);
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        setData(Date.now());
      }}
    >
      点击{value}
    </div>
  );
};

export default Index;
