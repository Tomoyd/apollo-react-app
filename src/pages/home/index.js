import React from 'react';
import { Link } from 'react-router-dom';
import useRedux from '../../store/useRedux';
import styles from './index.less';
const Index = () => {
  const [value, setRedux] = useRedux('test');
  return (
    <div
      onClick={() => {
        console.log('home');
        setRedux('hello home');
      }}
      className={styles.container}
    >
      hello world!!!!
      <Link to="/test">Test</Link>
    </div>
  );
};

export default Index;
