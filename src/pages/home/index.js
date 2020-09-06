import React from 'react';
import {Link} from 'react-router-dom';
import useReduxData from '../../hooks/useRedux';
// import useRequest from '../../hooks/useRequest';
// import {getTest} from '../../services/test';
import styles from './index.less';

const Index = () => {
  const [value, setReduxData] = useReduxData('test');

  // const [data, refdata] = useRequest(getTest, {});

  // console.log(data, refdata);
  // console.log(data);
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setReduxData('hello home 我在首页改变了');
        }}
      >
        点击我改变 {value}{' '}
      </button>{' '}
      <Link to="/test"> Test </Link>{' '}
    </div>
  );
};

export default Index;
