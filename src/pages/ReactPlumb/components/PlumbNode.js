import React from 'react';
import './PlumbNode.css';

/**
 * #638ee0;
 * #67d0a7;
 * #f1b61c;
 * @param {*} param0
 */
const PlumbNode = ({
  title = 'plumb',
  days = '3.1',
  MonMonRadio = '50%',
  barBgColor = '#638ee0',
  isDown = false,
  style,
  id,
}) => {
  return (
    <div className="container" id={id} style={style}>
      <div className="vBar" style={{ backgroundColor: barBgColor }}></div>
      <div className="plumb">{title}</div>
      <div className="days">
        <span>{days}</span>天<span className="iconfont icon-tubiao"></span>
      </div>
      <div className={`MonMonRadio ${isDown ? null : 'isUp'}`}>
        环比 <span>{MonMonRadio}</span>
        <span
          className={
            isDown ? 'iconfont icon-downArrow' : 'iconfont icon-upArrow'
          }
        ></span>
      </div>
    </div>
  );
};

export default PlumbNode;
