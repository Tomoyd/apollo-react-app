import React from 'react';
import useRedux from '../../store/useRedux';

const Index = () => {
  const [value, setRedux] = useRedux('test');
  const setData = (val) => {
    console.log(value);
    setRedux(val);
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
