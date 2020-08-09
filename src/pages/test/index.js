import React from 'react';
import useReduxData from '../../hooks/useRedux';

const Index = () => {
  const [value, setReduxData] = useReduxData('test');
  const setData = (val) => {
    setReduxData(val);
  };

  return (
    <div
      onClick={() => {
        setData(Date.now());
      }}
    >
      点击{value}
    </div>
  );
};

export default Index;
