import React from 'react';
import MiddleImage from '../images/MiddleImage.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import CustomHead from './CustomHead';
import CustomParagraph from './CustomParagraph';
const MiddlePanel = ({ onButtonClick, success = false }) => {
  return (
    <div className={styles.middlePanel}>
      <BetweenConatiner>
        <div className={styles.middleImg}>
          <img src={MiddleImage}></img>
        </div>
        <div className={styles.midMainInfo}>
          <CustomHead type="h2" color="#FFF">
            Vous êtes un professionnel préposé au ménage ?
          </CustomHead>
          <CustomParagraph marginTop="16px" color="#FFF" fontWeight="lighter">
            Inscrivez-vous à notre campagne de recrutement d’experts du ménage.
            Tiggidoo est une plateforme simple d’utilisation, qui vous permet
            d’être contacté pour la réalisation d’une prestation de service de
            ménage résidentiel.
          </CustomParagraph>
          <CustomParagraph marginTop="30px" color="#FFF" fontWeight="lighter">
            Grâce à la plateforme vous profitez d’outils nécessaires à
            l’amélioration de votre quotidien, au soutien de votre organisation
            et à l’accélération de votre productivité.
          </CustomParagraph>

          <CustomHead type="h3" color="#FFF" marginTop="56px">
            Inscrivez vous à notre recrutement, en répondant à notre
            questionnaire
          </CustomHead>
          <div
            className={styles.button}
            onClick={() => onButtonClick && onButtonClick('middle')}
          >
            <a>JE DEVIENS PRO</a>
          </div>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default MiddlePanel;
