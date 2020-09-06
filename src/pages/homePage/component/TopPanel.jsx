import React, { useState } from 'react';
import emailLogo from '../images/email.png';
import inputLogo from '../images/inputLogo.png';
import successLogo from '../images/success.png';
import TopLeftImg from '../images/TopLeftImg.svg';
import TopLogo from '../images/TopLogo.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import BlueText from './BlueText';
import CustomHead from './CustomHead';
import CustomParagraph from './CustomParagraph';

const TopPanel = ({ onButtonClick, onChange, success = false }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.topContainer}>
      <BetweenConatiner>
        <div className={styles.topImgConatiner}>
          <img src={TopLogo}></img>
        </div>
        <div
          className={`${styles.topText} ${styles.button}`}
          onClick={() => onButtonClick && onButtonClick('top')}
        >
          <a>DEVENIR PRO</a>
        </div>
      </BetweenConatiner>
      <BetweenConatiner>
        <div className={styles.topMainInfo}>
          <CustomHead marginTop="0">Service de Ménage résidentiel</CustomHead>
          <CustomHead type="h2" marginTop="30px">
            Nouvelle offre de service de ménage résidentiel au Quebec !
          </CustomHead>
          <div className={styles.blueAnchor}>
            <BlueText>100% EXPERTS</BlueText>
            <BlueText marginLeft="64px">SANS ENGAGEMENT</BlueText>
            <BlueText marginLeft="64px">ASSISTANCE 7j/7</BlueText>
          </div>
          <CustomParagraph>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          </CustomParagraph>
          <CustomHead type="h3">
            Restez informé du lancement officiel de nos services
          </CustomHead>
          <CustomParagraph marginTop="7px">
            Saisissez votre courriel pour être informé en avant première du
            lancement de notre service d’offre de ménage résidentiels adapté au
            besoin de votre logement et de vos disponibilités.
          </CustomParagraph>
          <BlueText>PRÉ-INSCRIPTION : - 20%</BlueText>
          <div className={styles.inputContainer}>
            {success ? (
              <>
                <img
                  src={successLogo}
                  alt=""
                  className={styles.successLogo}
                ></img>
                <BlueText marginTop="0" fontSize="25px" marginLeft="56px">
                  MERCI, vos informations sont enregistrées
                </BlueText>
              </>
            ) : (
              <>
                <div>
                  <img src={emailLogo}></img>
                </div>
                <div>
                  <input
                    value={inputValue}
                    onBlur={() => {
                      onChange(inputValue);
                    }}
                    onInput={(e) => {
                      setInputValue(e.target.value);
                    }}
                    type="text"
                    placeholder="courriel@tiggidoo.com"
                  />
                </div>
                <div>
                  <img
                    className={styles.button}
                    onClick={() => {
                      onButtonClick('email');
                    }}
                    src={inputLogo}
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.TopLeftImg}>
          <img src={TopLeftImg}></img>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default TopPanel;
