import React from 'react';
import '../index.css';
const LongBar = ({ plumbNum = 2, title, MonMonRadio, id, days }) => {
  return (
    <div
      className="myBar"
      id={id}
      style={{
        width: `${plumbNum * 120 + 40}px`,
        backgroundColor: '#81b3e6',
      }}
    >
      <div>{title}</div>
      <div>{MonMonRadio}</div>
      <div>{days}</div>
    </div>
  );
};

export default LongBar;
