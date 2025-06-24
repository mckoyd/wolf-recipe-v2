import React from 'react';
import styles from '../styles/HeroImg.module.scss';

interface IHeroBg {
  imgUrl: string;
}

const HeroImg: React.FC<IHeroBg> = ({ imgUrl }) => {
  return (
    <div className={styles.heroImgWrapper}>
      <img
        src={imgUrl}
        alt="A picture of an omlette"
        className={styles.heroImg}
      />
    </div>
  );
};

export default HeroImg;
