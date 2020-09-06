import React from 'react';
import camera from '../images/camera.png';
import facebook from '../images/facebook.png';
import ins from '../images/ins.png';
import LeftTree from '../images/LeftTree.svg';
import LogoBottom from '../images/LogoBottom.svg';
import RightTree from '../images/RightTree.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
const BottomPanel = () => {
  return (
    <div className={styles.bottomPanel}>
      <img src={LeftTree}></img>

      <BetweenConatiner>
        <div className={styles.bottomInfo1}>
          <img src={LogoBottom}></img>
          <div className={styles.copyRight}>
            Copiright 2020 Tout droit réservé
          </div>
        </div>
        <div className={styles.bottomInfo2}>
          <div>SUIVEZ-NOUS</div>
          <div className={styles.bottomIcons}>
            <img src={facebook}></img>
            <img src={ins}></img>
            <img src={camera}></img>
          </div>
        </div>
      </BetweenConatiner>
      <img className={styles.rightTree} src={RightTree}></img>
    </div>
  );
};

export default BottomPanel;
